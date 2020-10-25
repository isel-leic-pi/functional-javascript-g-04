function getShortMessages(messages) {
    return messages.filter(function(objArray) {
        return objArray.message.length <= 50;
      }).map(function(objArray) { 
          return objArray.message;
        });
}

module.exports = getShortMessages