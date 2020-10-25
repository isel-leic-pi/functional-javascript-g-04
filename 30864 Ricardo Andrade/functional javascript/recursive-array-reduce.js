function reduce(arr, fn, initial) {
    let i=initial
    if(arr.length==0){
        return i
    }
    return reduce(arr.slice(1),fn,fn(i,arr[0]))
  }

  module.exports = reduce

  /*
  function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
  
  */

