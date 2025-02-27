// gets inbox  page 
function getInbox(req, res, next) {
    res.render("inbox" , {
      title : "Inbox - Chat - Applicaton"
    })
  }
  
  module.exports = {
    getInbox
  }