var express =require('express');
var app=express();
var bodyParsere= require('body-parser');
var apire = require('apiai');
var port = process.env.port||8000;
app.use(bodyParsere.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/',function(request. responce ){
  res.send("Hello-World)
});
