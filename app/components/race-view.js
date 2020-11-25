import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class RaceViewComponent extends Component {
  @action
  insertedHorse(element, position) {
    anime({
      targets: element,
      translateX: {
        value: `${Math.floor( position * 100 / 10000)}%`,
        duration: 2000,
        easing: "linear",
      },
    });
  }

  @action
  updatedHorse(element, position) {
    anime({
      targets: element,
      translateX: {
        value: `${Math.floor( position * 100 / 10000)}%`,
        duration: 2000,
        easing: "linear",
      },
    });
  }
}
