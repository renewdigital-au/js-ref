
// return first element when array has at least one element.
// Otherwise returns false
export function getFirstArrayElement(arrayRef) {
  return Array.isArray(arrayRef) && arrayRef.length > 0 && arrayRef[0];
}

export function getIndexByAttrib(array, attrib, value) {
  return array.findIndex((elem) => {
    return elem[attrib] === value;
  });
}


export function getArrayObjByAttrib(array, attrib, value) {
  return array.filter((elem) => {
    return elem[attrib] === value;
  })
}


var array = [
  { name: "string 1", value: "this", other: "that" },
  { name: "string 2", value: "this", other: "that" }
];