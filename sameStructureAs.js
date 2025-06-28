
Array.prototype.sameStructureAs = function (other) {
  // so we need to use recursion 
  // first we check if the length of both arrays is the same
  // if not, we return false
  // if they have nested arrays, we need to check if the structure is the same
  // if they are both arrays, we need to check if the length of both arrays is the same
  // if they are not arrays, we return true

  let isSameStructure;

  // step one: check if the other is an array
  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    const thisElement = this[i];
    const otherElement = other[i];

    // if both elements are arrays, we need to check if they have the same structure
    if (Array.isArray(thisElement) && Array.isArray(otherElement)) {
      isSameStructure = thisElement.sameStructureAs(otherElement);
    } else if (!Array.isArray(thisElement) && !Array.isArray(otherElement)) {
      // if both elements are not arrays, we return true
      isSameStructure = true;
    } else {
      // if one element is an array and the other is not, we return false
      return false;
    }

    if (!isSameStructure) {
      return false;
    }
  }

  return true;

};

const arr1 = [1, 2, [3, 3]];
const arr2 = [5, 6, [7, 8]];

console.log(arr1.sameStructureAs(arr2)); // true
