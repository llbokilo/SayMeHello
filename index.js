/**Importation du miniframework Express */
var express = require("express");
/**Création d'une application web via l'objet Express */
var app = express();
/**Configuration de l'application web Express */
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);
/** Définition des routes */
app.get("/", function(request, response) {
response.render("homePage");});
app.get("/hello", function(request, response) {
    response.render("helloPage");
    });
app.post("/hello", function(request, response) {
    const name = request.query.name;
    response.render("helloToYouPage",{name:name});
    });