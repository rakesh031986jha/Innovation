
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');

function simpleResponse (req, res) {
  const assistant = new Assistant({request: req, response: res});

    console.log("Preparing response ");
      function mainIntent (assistant) {
        if (assistant.getRawInput() === 'Hi') {
       assistant.tell('How can i help you!');
      }
}

    assistant.handleRequest(assistant);


}

var exports = module.exports = {
  simpleResponse: simpleResponse
};
