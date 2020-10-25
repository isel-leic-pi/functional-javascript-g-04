// function getShortMessages(messages) {
//     return messages.filter(m => m.length <= 50).map(m => m.message);
// }

 function getShortMessages(messages) {
         return messages.filter(function(obj){
             return obj.message.length <= 50;

         }).map(function(obj){return obj.message;});
  }
      
  
  module.exports = getShortMessages
 
//  console.log(getShortMessages(
//      [
//          {message: 'blgadssdfsdfsdfsdfsdfsdfsdfsdfsddsdsdsdfdsfsdfsdfdsfsdfsdf'},
//          {message: 'blgadssdfsdfsdfsdfsdfsdfsdfs1'},
//         {message: 'blgadssdfsdfsdfsdfsdfsdfsdfssasdsadasdsadasdasdsadsa1'},
//         {message: 'blgadssdfsdfsdfsdfsdfsdfsdfs2'}

//     ]
// )); 


