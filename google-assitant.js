
let Assistant = require('actions-on-google').ApiAiAssistant;
let request = require('http');
let express = require('express');
let app = express();



app.post('/', function (req, res) {

  function simpleResponse (Assistant) {
    //const app = new Assistant({request: req,response: res});
  app.ask({speech: 'Howdy! I can tell you fun facts about '
          })
  };
assistant.handleRequest(simpleResponse);
});


//Assistant.handleRequest(simpleResponse);
var port = process.env.PORT || 4000;
app.listen(port);
    console.log('App listening on port %s', port);