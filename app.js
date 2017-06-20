
 var express=require('express');
var bodyParser = require('body-parser');
var apiai=require('apiai');
var aiengine=apiai('4d2ce4a4e2834ce084357c56bf2afa7b');
var app=express();
var port=process.env.PORT||5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post ('/',function(request,response){
 console.log(JSON.stringify(request));
 var apiagentreq= request.body.result && request.body.result.parameters;
 var resagent='Your ticket has been successful book  train name  from Station name  To to sation name  $ToStation travel date:-';
 console.log('request are'+apiagentreq);
 return response.json({
   speech:resagent,
   displayText: resagent,
   source:''
 });
});


 app.listen(port,function(){
 console.log("App is running in port" +port);
});
