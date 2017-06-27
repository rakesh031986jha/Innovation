
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');

function simpleResponse (req, res) {
  const assistant = new Assistant({request: req, response: res});

    console.log("Preparing response ");
      function mainIntent (assistant) {
        if (assistant.getRawInput() === 'Hi') {
       assistant.tell('How can i help you!');
      }else{
          const inputPrompt = assistant.buildInputPrompt(true, '<speak>Hi! <break time="1"/> ' +
          'I can read out an ordinal like ' +
          '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>',
          ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
            assistant.ask(inputPrompt);
         }
}

    assistant.handleRequest(assistant);


}

var exports = module.exports = {
  simpleResponse: simpleResponse
};
