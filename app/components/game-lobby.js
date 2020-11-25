import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameLobbyComponent extends Component {

  @service('socket-io') socketService;
  @service('player-state') playerStateService;
  @tracked gameCode = "";
  @tracked connectGamecode = "";
  @tracked connectedGamecode = "";
  @tracked gameState = null;

  didInsertElement() {
    const socket = this.socketService.socketFor(`http://localhost:3000/horseRacingDeluxe`);

    this.socket = socket;

    if(this.host) {
      socket.emit("host joined game", this.username);
      socket.on("game code generated", (gameCode) => {
        this._connectToGame(gameCode, this.username)
      });
    }

    socket.on("update game state", (gameState) => {
      console.log("updated")
      this.gameState = gameState;
    })

    
  }

  _connectToGame(gameCode, username) {
    this.socket.emit("connect to game", gameCode, username, (response, player) => {

      if(response != null) {
        this.connectedGamecode = response;
        this.playerStateService.savePlayerToDevice(player);
      }
      else {
        console.log("Failed to connect");
      }

    });
  }

  _startGame() {
    this.socket.emit("start game", this.playerStateService.getPlayerFromDevice());
  }



  @action
  connectToGame(gameCode) {
    this._connectToGame(gameCode, this.username);
  }

  @action
  startGame() {
    this._startGame();
  }
}
