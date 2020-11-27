import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CurrencyAssignerComponent extends Component {
  @tracked
  currencyState = {};

  @tracked
  totalCurrency = 0;

  constructor() {
    super(...arguments);
    this.totalCurrency = this.args.totalCurrency;
  }

  @action incrementCurrency(entity) {

    if(this.totalCurrency - 1 < 0) {
      return;
    }

    if(this.currencyState[entity.id] === undefined) {
      this.currencyState[entity.id]  = 0;
    }
    this.currencyState[entity.id] = this.currencyState[entity.id] + 1;
    this.totalCurrency -= 1;

    this.currencyState = this.currencyState;
  }

  @action decrementCurrency(entity) {

    if(this.totalCurrency + 1 > this.args.totalCurrency || this.totalCurrency < 0) {
      return;
    } 

    if(this.currencyState[entity.id] === undefined) {
      this.currencyState[entity.id]  = 0;
    }
    this.currencyState[entity.id] = this.currencyState[entity.id] - 1;
    this.currencyState = this.currencyState;
    this.totalCurrency += 1;
  }
}