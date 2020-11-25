import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {

  //@tracked hostGame = undefined;
  //@tracked joinGame = undefined;
  @tracked host = false;
  @tracked selectedGame = undefined;
  @tracked step = 0;
  @tracked username = "";

  /*
  @action hostGame() {
    //this.hostGame = username;
  }
  */

  @action hostGame() {
    this.host = true;
    this.step = 3;
  }

  @action joinGame() {
    this.host = false;
    this.step = 3;
  }

  @action
  selectGame(game) {
    this.selectedGame = game;
    this.step = 1;
  }

  @action
  usernameSelected(username) {
    this.username = username;
    this.step = 2;
  }
}
