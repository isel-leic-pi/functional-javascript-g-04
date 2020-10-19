function check(users){
    return function(submittedUser) {
      return users.some(function(user){
        return user.id === submittedUser.id;
      });
    }
  }
  function checkUsersValid(goodUsers){
    return function(submittedUsers){
      return submittedUsers.every(check(goodUsers));
    };
  }

  module.exports = checkUsersValid

  