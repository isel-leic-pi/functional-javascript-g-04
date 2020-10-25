module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function name(accumulator, item, index, arr) {

        accumulator.push(fn.call(thisArg, item, index, arr));

        return accumulator
    }, []);
  }
 