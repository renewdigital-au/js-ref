import {
  monthsRemaining,
  dateToSting
} from '../moment';

describe('monthsRemaining', () => {
  it('should give months between two dates', () => {
    expect(
      monthsRemaining('2020-02-05T23:15:30.000Z', '2021-02-05T23:15:30.000Z')
    ).toBe(12);
    expect(
      monthsRemaining('2020-08-05T23:15:30.000Z', '2021-02-05T23:15:30.000Z')
    ).toBe(6);
  });
});

describe('dateToSting', () => {
  it('should convert to DD Month YY', () => {
    expect(dateToSting('2022-02-05T23:15:30.000Z')).toBe(
      '05 February 22'
    );
  });
});
