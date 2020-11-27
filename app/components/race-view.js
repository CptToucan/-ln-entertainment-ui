import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class RaceViewComponent extends Component {
  @action
  insertedHorse(element, position) {
    anime({
      targets: element,
      translateX: {
        value: `calc(${Math.floor( position * 100 / 10000)}% - 4rem)`,
        duration: 0,
        easing: "linear",
      },
    });
  }

  @action
  updatedHorse(element, position) {
    anime({
      targets: element,
      translateX: {
        value: `calc(${Math.floor( position * 100 / 10000)}% - 4rem)`,
        duration: 2000,
        easing: "linear",
      },
    });
  }
}
