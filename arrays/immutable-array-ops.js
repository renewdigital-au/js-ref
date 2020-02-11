/* INSERT element at index */
export default function insertAtIndex(index, item, array) {
    return [...array.slice(0, index + 1), item, ...array.slice(index + 1)]
}

/* REMOVE element at index */
export default function removeAtIndex(indexToRemove, array) {
    return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
}

/* APPEND value to end of array */
export default function appendToEnd(item, array) {
    return [...array, item];
}

/* PREPEND value to start of array */
export default function prependToStart(item, array) {
    return [item, ...array];
}