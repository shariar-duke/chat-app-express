function getLogin(req, res, next) {
  res.render("index" , {
    title : "Login - Chat - Applicaton"
  })
}

module.exports = {
    getLogin
}