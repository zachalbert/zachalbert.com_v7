import moment from "moment";

export default class TimeWorked {
  constructor(el) {
    this.el = el;

    let startDate = moment([ 2015, 4, 1 ]);
    let endDate = moment();
    let output = endDate.diff(startDate, 'years') + '+ years';

    if( output == null || output == '' ) {
      output = '3 years';
    }

    el.textContent = output;
  }
}
