
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');

function simpleResponse (req, res) {
  const assistant = new Assistant({request: req, response: res});

    console.log("Preparing response ");
//    assistant.ask({speech: 'Howdy! I can tell you fun facts about ' +
  //            'almost any number, like 42. What do you have in mind?',
    //          displayText: 'Howdy! I can tell you fun facts about almost any ' +
      //              'number. What do you have in mind?'})

      function mainIntent (assistant) {
          const inputPrompt = assistant.buildInputPrompt(true, '<speak>Hi! <break time="1"/> ' +
          'I can read out an ordinal like ' +
          '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>',
          ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
            assistant.ask(inputPrompt);
         }
                    

    const actionMap = new Map();
    actionMap.set(assistant.WELCOME_INTENT, welcomeIntent);
    assistant.handleRequest(actionMap);


}

var exports = module.exports = {
  simpleResponse: simpleResponse
};
