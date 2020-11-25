import { helper } from '@ember/component/helper';
import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default class extends Helper {
  @service("player-state") playerStateService;
  compute(params) {
    let savedPlayerState = this.playerStateService.getPlayerFromDevice();
    let playerStates = params[0];
    if(savedPlayerState) {
      return playerStates[savedPlayerState.id];
    }
  }
}
