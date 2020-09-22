
// return first element when array has at least one element.
// Otherwise returns false
export function getFirstElement(arrayRef) {
  return Array.isArray(arrayRef) && arrayRef.length > 0 && arrayRef[0];
}