import moment from "moment";

export default class TimeWorked {
  constructor(el) {
    this.el = el;

    let startDate = moment([ 2015, 2, 1 ]);
    let endDate = moment();
    let output = endDate.diff(startDate, 'years') + '+ years';

    if( output == null || output == '' ) {
      output = '4 years';
    }

    el.textContent = output;
  }
}
