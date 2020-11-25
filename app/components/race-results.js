import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class RaceResultsComponent extends Component {
  @action
  winnerRevealed(element) {
    anime({
      targets: element,

      opacity: [
        { value: 0, duration: 0 },
        {
          value: 100,
          duration: 1000,
        },
      ],
      scaleX: [
        {
          value: 1.5,
          duration: 1000,
        },
        {
          value: 1,
          duration: 1000,
        },
      ],

      scaleY: [
        {
          value: 1.5,
          duration: 1000,
        },
        {
          value: 1,
          duration: 1000,
        },
      ],

      translateY: [
        {
          value: "50%",
          duration: 1000,
        },
        {
          value: 0,
          duration: 1000,
        },
      ],
    });
  }
}
