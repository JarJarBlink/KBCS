import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {displayConfiguration,readDisplayJson} from '../src/shared/ui/display-settings.js';
import {sheetRows,columnTable,displayValue,displayState} from '../src/shared/ui/data-sheet.js';
import {namedColumns,optionAnnotationIndex,rawInteger} from '../src/features/stages/display-raw.js';

const ledger=readDisplayJson(readFileSync(new URL('../src/features/stages/column-ledger.json',import.meta.url),'utf8'));
test('v3全列と旧Map_optionの原位置を維持する',()=>{
  const records=Object.values(ledger.scopes).flat(),keys=records.map(record=>record.key);
  assert.equal(new Set(keys).size,116);
  assert.deepEqual(Object.fromEntries(['A','B','C'].map(grade=>[grade,records.filter(record=>record.confidence===grade).length])),{A:92,B:23,C:1});
  const raw=Array(21).fill('');
  raw[2]='1';raw[7]='-1';raw[16]='0';raw[17]='1';raw[19]='1';raw[20]='注釈, //';
  const current=namedColumns(ledger,'map.options',raw,20);
  assert.equal(current.usesExtendedStageRecordStorage.value,1);
  assert.equal(current.productionPriceMultiplierPercent.value,0);
  assert.equal(current.usesEnergyForSortie.value,1);
  assert.equal(current.guerrillaGroupMask.value,-1);
  assert.equal(current.mapNameSourceAnnotation.value,'注釈, //');
  assert.equal(current.doubleXpAdEligibilityFlag.raw,'');
  const old={rawOptions:[...raw.slice(0,19),'旧注釈']};
  const oldFields=namedColumns(ledger,'map.options',old.rawOptions,optionAnnotationIndex(old));
  assert.equal(oldFields.usesExtendedStageRecordStorage.index,null);
  assert.equal(oldFields.mapNameSourceAnnotation.index,19);
  assert.equal(oldFields.mapNameSourceAnnotation.value,'旧注釈');
  const ambiguous={rawOptions:raw.slice(0,20)};
  const ambiguousFields=namedColumns(ledger,'map.options',ambiguous.rawOptions,optionAnnotationIndex(ambiguous));
  assert.equal(ambiguousFields.usesExtendedStageRecordStorage.value,null);
  assert.equal(ambiguousFields.usesExtendedStageRecordStorage.raw,'1');
  assert.equal(rawInteger('0x10'),null);
});

const registry=['a','new','b'].map(id=>({id,group:'basic',get:context=>context[id]}));
const standard={schemaVersion:1,database:'fixture',fields:{a:{label:'標準A',order:10},new:{label:'追加',order:20,visibility:'whenActive'},b:{label:'標準B',order:30}}};
const config=displayConfiguration('fixture',registry,standard,{aliases:{old:'a'}});
test('個人差分を移行し、追加項目は標準の位置と表示条件を継承する',()=>{
  const warnings=[],preset=config.parsePreset({id:'p1',name:'攻略',overrides:{old:{label:'<A>'},removed:{label:'未登録'}},orderOverrides:{basic:['b','old']}},warnings);
  assert.equal(warnings.length,2);
  assert.deepEqual(config.resolve(preset).basic.map(setting=>setting.field.id),['b','a','new']);
  const context={a:displayValue(0),new:displayState('inactive'),b:displayValue(-1)};
  const basic=sheetRows(config.resolve(preset).basic,context);
  assert.match(basic,/&lt;A&gt;/);
  assert.doesNotMatch(basic,/追加|colspan/);
  assert.match(sheetRows(config.resolve(preset).basic,context,{detail:true}),/追加<\/th><td colspan="3"/);
  assert.throws(()=>readDisplayJson('{"__proto__":{"polluted":true}}'));
  assert.throws(()=>config.parseStore({schemaVersion:2,database:'fixture',presets:[],activePresetId:'standard'}));
  assert.throws(()=>config.parsePreset({...preset,overrides:{a:{formatter:'raw'}}}));
});

test('条件つきの敵列は1行でも有効なら列全体を描画する',()=>{
  const fields=config.resolve().basic;
  const rows=[{a:displayValue('敵A'),b:displayValue(5),new:displayState('outside')},{a:displayValue('敵B'),b:displayValue(0),new:displayValue(3)}];
  assert.equal((columnTable('敵出現',fields,rows,{}).match(/<th scope="col"/g)??[]).length,3);
  assert.equal((columnTable('敵出現',fields,rows,{}).match(/<td class=/g)??[]).length,6);
  assert.equal((columnTable('敵出現',fields,rows.slice(0,1),{}).match(/<th scope="col"/g)??[]).length,2);
});
