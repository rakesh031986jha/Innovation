
 var express=require('express');
var bodyParser = require('body-parser');
var apiai=require('apiai');
var aiengine=apiai('d4df7b3ef3394631b9aaa620bd989bde');
var app=express();
var port=process.env.PORT||5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post ('/',function(request,response){
 console.log(JSON.stringify(request.body));
 var apiagentreq= request.body.result && request.body.result.parameters;
<<<<<<< HEAD
 var resagent='Your ticket has been successful book  train name  from Station name ';
=======
 var resagent='Your ticket has been successful book';
>>>>>>> 87690073f1bb73f0a1ed4e60c8d98213d9d70475
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
