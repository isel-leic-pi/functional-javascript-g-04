function countWords(inputWords) {
    return inputWords.reduce(function(acc, curr) {
        if (acc[curr]) {
          acc[curr] += 1;
        } else {
          acc[curr] = 1
        }
        return acc;
    
      }, {})
  }

  module.exports = countWords

  /* 
  function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
  
  */


