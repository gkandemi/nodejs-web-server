var express = require("express");
var middleware = require("./middleware");
var app = express();
var PORT = 3000;

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthentication, function (req, res) {
    res.send("Hakkımda sayfası!!!");
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log("Express server " + PORT + " nolu portta çalışıyor...");
});