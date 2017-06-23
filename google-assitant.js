
let Assistant = require('actions-on-google').ApiAiAssistant;
let request = require('http');
let express = require('express');
let bodyParser  = require('body-parser')
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {

  console.log(JSON.stringify(req.body));
// for google assistant request
  if(req.body.originalRequest.source===google){
  const assistant = new Assistant({request: req, response: res});
function simpleResponse (Assistant) {

    console.log("Preparing response ")
    assistant.ask({speech: 'Howdy! I can tell you fun facts about ' +
              'almost any number, like 42. What do you have in mind?',
              displayText: 'Howdy! I can tell you fun facts about almost any ' +
                    'number. What do you have in mind?'})
  };
assistant.handleRequest(simpleResponse);
}


// For slack request
  if(req.body.originalRequest.source===slack){
var apiagentreq= req.body.result && req.body.result.parameters;
var resagent='How can i help You ';
console.log('request are'+apiagentreq);
return response.json({
  speech:resagent,
  displayText: resagent,
  source:''
});
}
});

//Assistant.handleRequest(simpleResponse);
var port = process.env.PORT || 4000;
app.listen(port);
    console.log('App listening on port %s', port);
