/**
 * Generator 
 */
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");

var config = require("./config");
var setupController  = require("./api/controller/setupController");
var todoController = require("./api/controller/todoController");

var app=express();
var port =process.env.PORT ||3000;

/**
 * Config all midware
 */
app.use("/assets",express.static(__dirname+"/public"));
app.use(bodyParser.json());
//chấp nhận tất cả các kiểu dữ liệu post về server
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.set("view engine","ejs");

//db info
console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString());

setupController(app);
todoController(app);

/**
 * Routing
 */
app.get("/",function(req,res){
    res.render("index.ejs");
});

//Start server
app.listen(port,function(){
    console.log("Ap listenning on port: "+port);
});