
// get numChars from the end of a string 
export function strEndChars(str, numChars) {
  // to work with end of string covert to negative
  let numCharsNeg = -1 * numChars;
  numChars++; // numChars convert to array index
  return str.slice(numCharsNeg);
}

// remove trailing comma from a string
export const removeTrailComma = text => {
  return text.replace(/,{1,}$/, "");
};

// split string by comma to new array
export const parseStringListToArray = stringList =>
  removeTrailComma(stringList)
    .split(",")
    .map(item => item.toLowerCase().trim());


