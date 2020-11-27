import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameAreaComponent extends Component {
  @service('player-state') playerStateService;

  get currentPlayerState() {
    return this.playerStateService.getCurrentPlayerState(this.gameState.gameState.playerState);
  }

  get currentPlayerId() {
    return this.playerStateService.getPlayerFromDevice().id;
  }


  @action
  submitBets(assignment) {
    this.socket.emit("update bet", this.currentPlayerId, assignment);
  }

  @action
  assignDrinks(assignment) {
    this.socket.emit("assign drinks", this.currentPlayerId, assignment);
  }

  @action
  refreshPage() {
    location.reload();
  }
}
