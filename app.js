var express=require("express");
var bodyParser=require("body-parser");
var mysql = require('mysql');
var app=express();

//var aplicacion = require('./routes/index');

var port=process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.use(express.static('public'));

//app.get('/', aplicacion);
///___________________________________________________________________________________________________________

app.get('/', function (req, res) {
   res.render('aplicacion');
});

app.get('/crearapp', function (req, res) {
    res.render('crearapp');
});

app.get('/edit', function (req, res) {
    res.render('editarapp');
});

app.get('/escenarios', function (req, res) {
    res.render('escenarios');
});

app.get('/crearescenario', function (req, res) {
    res.render('crearEscenario');
});

app.get('/editarescenario', function (req, res) {
    res.render('editarEscenario');
});








//_________________________________________________________________________________________________________________


app.listen(port, function () {
    console.log("Listening in port " + port);
});