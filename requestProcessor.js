
//let Assistant = require('actions-on-google').ApiAiAssistant;
let request = require('http');
let express = require('express');
let bodyParser  = require('body-parser')
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var googleRequest = require('./googleRequest');
var slackrequest = require('./slackrequest');

app.post('/', function (req, res) {
  console.log(JSON.stringify(req.body));
// for google assistant request
  if(req.body.originalRequest.source==='google'){
    console.log("comeing in side ");
  googleRequest.simpleResponse(req, res);
}
   // For slack request
  if(req.body.originalRequest.source==='slack'){
    slackrequest.slackReq();
}
});

//Assistant.handleRequest(simpleResponse);
var port = process.env.PORT || 4000;
app.listen(port);
    console.log('App listening on port %s', port);

//module =googleRequest;
module.exports.googleRequest = googleRequest;
module.exports.slackrequest = slackrequest;
