import { strEndChars } from '../stringUtils.js';

describe('strEndChars', () => {
  const testStrings = ['BANANA', 'APPle', '0987654321'];

  it('should return last 4 digits', () => {
    const expectedStings = ['NANA', 'PPle', '4321'];
    expect(strEndChars(testStrings[0], 4)).toBe(expectedStings[0]);
    expect(strEndChars(testStrings[1], 4)).toBe(expectedStings[1]);
    expect(strEndChars(testStrings[2], 4)).toBe(expectedStings[2]);
  });
});
