import {loadStageDisplay} from './src/features/stages/display-fields.js';
import {mountStageSheets} from './src/features/stages/display-sheet.js';
import {activeDisplayPreset} from './src/shared/ui/display-settings.js';
import {readGameSettings} from './src/shared/browser/game-settings.js';

export async function mountSortieStageDetail(root,handlers){
  const {configuration,ledger}=await loadStageDisplay();
  const sheets=mountStageSheets(root.querySelector('[data-sortie-map-sheet]'),root.querySelector('[data-sortie-stage-sheet]'),{...handlers,compact:true});
  return {
    render(input){
      const settings=readGameSettings();
      const display=configuration.resolve(activeDisplayPreset(configuration.read().value));
      const condition={clears:0,combo:0,okame:0,studyLevel:settings.studyLevel,treasure:settings.studyTreasureBonus};
      return sheets.render({...input,visible:[input.stage],settings,condition,display,detail:false,stats:false,ledger});
    },
    clear:sheets.clear,
  };
}
