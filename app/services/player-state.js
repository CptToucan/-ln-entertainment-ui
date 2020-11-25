import Service from '@ember/service';

export default class PlayerStateService extends Service {
  savePlayerToDevice(player) {
    localStorage.setItem("hrd_player", JSON.stringify(player))
  }

  getPlayerFromDevice() {
    return JSON.parse(localStorage.getItem("hrd_player"));
  }

  getCurrentPlayerState(playerStates) {
    let playerId = this.getPlayerFromDevice().id;
    return playerStates[playerId];

  }
}
