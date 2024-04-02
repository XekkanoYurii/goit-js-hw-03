function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    } else {
        return newArray;
    }
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]