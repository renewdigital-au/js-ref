
// get numChars from the end of a string 
export function strEndChars(str, numChars) {
  // to work with end of string covert to negative
  let numCharsNeg = -1 * numChars;
  numChars++; // numChars convert to array index
  return str.slice(numCharsNeg);
}

