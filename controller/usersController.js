// gets user page 
function getUsers(req, res, next) {
    res.render("users" , {
      title : "Users - Chat - Applicaton"
    })
  }
  
  module.exports = {
    getUsers
  }