const createError = require("http-errors");

// 404 Not Found Handler
function notFoundHandler(req, res, next) {
    next(createError(404, "Your requested content was not found"));
}

// Default Error Handler
function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        title: "Error page",
        message: err.message || "Something went wrong!",
        status: err.status || 500
    });
}

module.exports = { notFoundHandler, errorHandler };
