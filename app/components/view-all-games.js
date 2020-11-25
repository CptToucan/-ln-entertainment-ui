import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ViewAllGamesComponent extends Component {


  games = [{displayName: "Horse Racing Deluxe", namespace: "horseRacingDeluxe"}]

  @action selectGame(selectedGame) {
    this.selectGame(selectedGame);
  }
  
}
