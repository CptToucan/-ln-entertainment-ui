import { helper } from '@ember/component/helper';
import { A } from '@ember/array';

export default helper(function sortRaceResults(params/*, hash*/) {
  let race = params[0];
  let raceResults = [];


  for(let chicken in race) {

    let chickenInRace = JSON.parse(JSON.stringify(race[chicken]));
    chickenInRace.name = chicken;
    raceResults.push(chickenInRace);
  }

  return A(raceResults).sortBy("position").reverseObjects();
});
