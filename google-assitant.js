
let Assistant = require('actions-on-google').ApiAiAssistant;
let request = require('http');
let express = require('express');
let bodyParser  = require('body-parser')
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', function (req, res) {
  console.log(JSON.stringify(req.body));
  const assistant = new Assistant({request: req, response: res});

  function simpleResponse (Assistant) {
    //const app = new Assistant({request: req,response: res});
    console.log("Preparing response ")
    app.ask({speech: 'Howdy! I can tell you fun facts about ' +
              'almost any number, like 42. What do you have in mind?',
              displayText: 'Howdy! I can tell you fun facts about almost any ' +
                    'number. What do you have in mind?'})
  };
assistant.handleRequest(simpleResponse);
});


//Assistant.handleRequest(simpleResponse);
var port = process.env.PORT || 4000;
app.listen(port);
    console.log('App listening on port %s', port);
