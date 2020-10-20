var slice = Array.prototype.slice

    function logger(namespace) {
        return function() {
            let arr = Array.from(arguments)
            console.log.apply(console, [namespace].concat(arr))
          }
    }

    module.exports = logger

    /* 
    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
      }
    }
    */