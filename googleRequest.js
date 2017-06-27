
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');

function simpleResponse (req) {
  const assistant = new Assistant({request: req, response: res});

    console.log("Preparing response ");
    assistant.ask({speech: 'Howdy! I can tell you fun facts about ' +
              'almost any number, like 42. What do you have in mind?',
              displayText: 'Howdy! I can tell you fun facts about almost any ' +
                    'number. What do you have in mind?'})

assistant.handleRequest(simpleResponse);

}


var exports = module.exports = {
  simpleResponse: simpleResponse()
};
