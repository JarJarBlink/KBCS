import com.google.gson.Gson;
import com.google.gson.stream.JsonWriter;
import ghidra.app.util.headless.HeadlessScript;
import ghidra.program.model.address.*;
import ghidra.program.model.block.*;
import ghidra.program.model.listing.*;
import ghidra.program.model.pcode.*;
import ghidra.program.model.symbol.*;
import ghidra.program.model.scalar.Scalar;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.zip.GZIPOutputStream;

public class ExportStructure extends HeadlessScript {
    private final Gson gson = new Gson();

    private void row(JsonWriter out, Writer stream, Map<String, ?> data) throws IOException {
        gson.toJson(data, Map.class, out);
        stream.write('\n');
    }

    private String storage(Varnode node) {
        if (node == null) return null;
        return node.getAddress().getAddressSpace().getName() + ":" +
            Long.toUnsignedString(node.getOffset(), 16) + ":" + node.getSize();
    }

    private void rangeList(JsonWriter out, AddressSetView body) throws IOException {
        out.beginArray();
        for (AddressRange range : body.getAddressRanges()) {
            out.beginArray().value(range.getMinAddress().toString())
                .value(range.getMaxAddress().toString()).endArray();
        }
        out.endArray();
    }

    private void blocks(JsonWriter out, BasicBlockModel model, AddressSetView body) throws Exception {
        out.beginArray();
        CodeBlockIterator blocks = model.getCodeBlocksContaining(body, monitor);
        while (blocks.hasNext()) {
            monitor.checkCancelled();
            CodeBlock block = blocks.next();
            out.beginArray().value(block.getFirstStartAddress().toString());
            rangeList(out, block.intersect(body));
            out.beginArray();
            CodeBlockReferenceIterator edges = block.getDestinations(monitor);
            while (edges.hasNext()) {
                CodeBlockReference edge = edges.next();
                if (edge.getFlowType().isCall()) continue;
                out.beginArray().value(edge.getFlowType().toString()).value(edge.getReferent().toString())
                    .value(edge.getReference().toString()).endArray();
            }
            out.endArray().endArray();
        }
        out.endArray();
    }

    private void references(JsonWriter out, AddressSetView body) throws Exception {
        List<Map<String, Object>> samples = new ArrayList<>();
        out.name("refs").beginArray();
        ReferenceManager refs = currentProgram.getReferenceManager();
        AddressIterator locations = refs.getReferenceSourceIterator(body, true);
        while (locations.hasNext()) {
            monitor.checkCancelled();
            for (Reference ref : refs.getReferencesFrom(locations.next())) {
                Address target = ref.getToAddress();
                Function callee = currentProgram.getFunctionManager().getFunctionAt(target);
                Symbol symbol = currentProgram.getSymbolTable().getPrimarySymbol(target);
                String name = symbol == null || symbol.getSource() == SourceType.DEFAULT ? null : symbol.getName(true);
                Data data = target.isMemoryAddress() ? currentProgram.getListing().getDefinedDataContaining(target) : null;
                out.beginArray().value(ref.getFromAddress().toString()).value(target.toString())
                    .value(ref.getReferenceType().toString()).value(ref.getSource().toString())
                    .value(callee == null ? null : callee.getEntryPoint().toString())
                    .value(name).value(data == null ? null : data.getDataType().getDisplayName()).endArray();
                Map<String, Object> sample = new LinkedHashMap<>();
                sample.put("source", ref.getFromAddress().toString());
                sample.put("target", target.toString());
                sample.put("target_space", target.getAddressSpace().getName());
                sample.put("resolution", callee != null ? "function" : data != null ? "defined_data" : "boundary_unknown");
                if (data != null) {
                    sample.put("start", data.getMinAddress().toString());
                    sample.put("offset", target.subtract(data.getMinAddress()));
                    sample.put("size", data.getLength());
                    sample.put("datatype", data.getDataType().getDisplayName());
                    var block = currentProgram.getMemory().getBlock(data.getMinAddress());
                    String reason = "not_readonly_initialized_data";
                    if (data.isPointer()) reason = "pointer_requires_relocation_and_runtime_resolution";
                    else if (block != null && block.isInitialized() && !block.isWrite() && !block.isExecute()
                            && block.contains(data.getMaxAddress())) {
                        AddressSet range = new AddressSet(data.getMinAddress(), data.getMaxAddress());
                        if (currentProgram.getRelocationTable().getRelocations(range).hasNext()) reason = "contains_relocation";
                        else {
                            byte[] prefix = new byte[Math.min(data.getLength(), 32)];
                            int count = currentProgram.getMemory().getBytes(data.getMinAddress(), prefix);
                            sample.put("bytes", HexFormat.of().formatHex(prefix, 0, count));
                            sample.put("capture_start", data.getMinAddress().toString());
                            sample.put("capture_bytes", count);
                            reason = count == data.getLength() ? "complete_static_bytes" : "bounded_prefix";
                        }
                    }
                    sample.put("capture_state", reason);
                }
                samples.add(sample);
            }
        }
        out.endArray().name("reference_details");
        gson.toJson(samples, List.class, out);
    }

    private void operands(JsonWriter out, Instruction instruction) throws IOException {
        out.beginArray();
        for (int i = 0; i < instruction.getNumOperands(); i++) {
            out.beginObject().name("text").value(instruction.getDefaultOperandRepresentation(i))
                .name("type").value(instruction.getOperandType(i)).name("objects").beginArray();
            for (Object operand : instruction.getOpObjects(i)) {
                out.beginObject().name("class").value(operand.getClass().getSimpleName())
                    .name("text").value(operand.toString());
                if (operand instanceof Scalar scalar) {
                    out.name("bits").value(scalar.bitLength()).name("signed").value(scalar.isSigned())
                        .name("unsigned_hex").value(Long.toUnsignedString(scalar.getUnsignedValue(), 16))
                        .name("signed_decimal").value(Long.toString(scalar.getSignedValue()));
                }
                if (operand instanceof Address address)
                    out.name("space").value(address.getAddressSpace().getName());
                out.endObject();
            }
            out.endArray().endObject();
        }
        out.endArray();
    }

    private void function(JsonWriter out, Writer stream, BasicBlockModel model, Function function) throws Exception {
        AddressSetView body = function.getBody();
        out.beginObject().name("type").value("function").name("address").value(function.getEntryPoint().toString())
            .name("source").value(function.getSymbol().getSource().toString()).name("thunk").value(function.isThunk())
            .name("ranges");
        rangeList(out, body);
        out.name("blocks");
        blocks(out, model, body);
        references(out, body);
        out.name("instructions").beginArray();
        MessageDigest bytes = MessageDigest.getInstance("SHA-256");
        InstructionIterator instructions = currentProgram.getListing().getInstructions(body, true);
        int count = 0, indirect = 0, unresolved = 0;
        long length = 0;
        while (instructions.hasNext()) {
            monitor.checkCancelled();
            Instruction instruction = instructions.next();
            bytes.update(instruction.getBytes());
            length += instruction.getLength();
            FlowType flow = instruction.getFlowType();
            if (flow.isComputed() && (flow.isCall() || flow.isJump())) {
                indirect++;
                if (instruction.getFlows().length == 0) unresolved++;
            }
            out.beginArray().value(instruction.getAddress().toString()).value(instruction.getMnemonicString())
                .value(flow.toString()).beginArray();
            for (PcodeOp operation : instruction.getPcode()) {
                out.beginArray().value(operation.getMnemonic()).value(storage(operation.getOutput())).beginArray();
                for (Varnode input : operation.getInputs()) out.value(storage(input));
                out.endArray().endArray();
            }
            out.endArray().endArray();
            count++;
        }
        out.endArray().name("disassembly").beginArray();
        instructions = currentProgram.getListing().getInstructions(body, true);
        while (instructions.hasNext()) {
            monitor.checkCancelled();
            Instruction instruction = instructions.next();
            out.beginArray().value(HexFormat.of().formatHex(instruction.getBytes()))
                .value(instruction.toString());
            operands(out, instruction);
            out.endArray();
        }
        out.endArray().name("bytes_sha256").value(HexFormat.of().formatHex(bytes.digest()))
            .name("instruction_count").value(count).name("instruction_bytes").value(length)
            .name("body_bytes").value(body.getNumAddresses()).name("indirect").value(indirect)
            .name("unresolved").value(unresolved).endObject();
        stream.write('\n');
    }

    @Override
    public void run() throws Exception {
        Path root = Path.of(getScriptArgs()[0]);
        String sha = currentProgram.getExecutableSHA256().toLowerCase(Locale.ROOT);
        if (!sha.equals(getScriptArgs()[2]) || analysisTimeoutOccurred() ||
                !currentProgram.getOptions(Program.PROGRAM_INFO).getBoolean(Program.ANALYZED_OPTION_NAME, false)) {
            throw new IOException("Structure export requires the verified, fully analyzed program");
        }
        Path partial = root.resolve("structure.jsonl.gz.partial");
        long start = System.nanoTime();
        int count = 0;
        BasicBlockModel model = new BasicBlockModel(currentProgram);
        try (Writer stream = new BufferedWriter(new OutputStreamWriter(
                new GZIPOutputStream(Files.newOutputStream(partial), 65536), StandardCharsets.UTF_8), 65536)) {
            JsonWriter out = new JsonWriter(stream);
            out.setStrictness(com.google.gson.Strictness.LENIENT);
            row(out, stream, Map.of("type", "program", "schema", 1, "sha256", sha,
                "language", currentProgram.getLanguageID().toString(), "image_base", currentProgram.getImageBase().toString(),
                "ghidra", ghidra.framework.Application.getApplicationVersion(), "disassembly", true, "reference_format", 1,
                "program_id", Long.toUnsignedString(currentProgram.getUniqueProgramID(), 16)));
            FunctionIterator functions = currentProgram.getFunctionManager().getFunctions(true);
            while (functions.hasNext()) {
                function(out, stream, model, functions.next());
                count++;
            }
            row(out, stream, Map.of("type", "complete", "functions", count, "seconds", (System.nanoTime()-start)/1e9));
            out.flush();
        }
        Files.move(partial, root.resolve("structure.jsonl.gz"), StandardCopyOption.REPLACE_EXISTING);
        println("Structure export complete: " + count);
    }
}
