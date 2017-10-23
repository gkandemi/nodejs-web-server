var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("Özel route girildi!!!");
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}

module.exports = middleware;