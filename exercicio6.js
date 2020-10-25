function countWords(inputWords) {
    return inputWords.reduce((uniqueWords, word ) => {
        if(!uniqueWords[word]) {
            uniqueWords[word]=1;
        }
        else{
            uniqueWords[word]+=1;
        } 
        return uniqueWords;
    },{});
  }
  
  module.exports = countWords

