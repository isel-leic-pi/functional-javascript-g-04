function reduce(arr, fn, initial) {
  var accucumulator = initial; 
  if (arr.length === 0) {

    return accucumulator;
  }

  return reduce(arr.slice(1), fn, fn(accucumulator, arr[0]));
}

  module.exports = reduce

//console.log(reduce([1,2,3], function (prev, curr, index, arr) { prev+curr; }, 0));
