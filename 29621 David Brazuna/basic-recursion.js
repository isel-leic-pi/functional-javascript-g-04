function reduce(arr, fn, initial) {
    let init = initial;
    if(!arr.length) {
        return init;
    }

    return reduce(arr.slice(1),fn,fn(init,arr[0]))
  }

  module.exports = reduce