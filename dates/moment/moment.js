import moment from 'moment';

// number of months left till current date
export function monthsRemaining(currentDate = new Date(), expiryDate) {
  return moment(expiryDate).diff(moment(currentDate), 'months');
}

// convert date to string
// Accepts date in iso format '2022-02-05T23:15:30.000Z'
export function dateToSting(date, stringFormat = 'DD MMMM YY') {
  return moment(date).utc().format(stringFormat);
}