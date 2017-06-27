
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');

function simpleResponse (req, res) {
  const assistant = new Assistant({request: req, response: res});

    console.log("Preparing response ");
    //  function mainIntent (assistant) {
        if (assistant.getRawInput() === 'hi') {
          console.log("Preparing response 2");
       assistant.tell('Welcome how can i help you');
       console.log("Preparing response 3");
      }

    assistant.handleRequest(assistant);
}

var exports = module.exports = {
  simpleResponse: simpleResponse
};
