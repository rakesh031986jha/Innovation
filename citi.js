var express=require('express');
var bodyParser = require('body-parser');
var apiai=require('apiai');
var aiengine=apiai('17f6327eff894843b6d7369f9879df2b');
var app=express();
var port=process.env.PORT||6001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post ('/',function(request,response){
console.log(JSON.stringify(request.body));
var apiagentreq= request.body.result && request.body.result.parameters;
var resagent='How can i help You ';
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
