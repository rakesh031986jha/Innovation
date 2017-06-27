
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');

function simpleResponse (req, res) {
  const assistant = new Assistant({request: req, response: res});

    console.log("Preparing response ");
//    assistant.ask({speech: 'Howdy! I can tell you fun facts about ' +
  //            'almost any number, like 42. What do you have in mind?',
    //          displayText: 'Howdy! I can tell you fun facts about almost any ' +
      //              'number. What do you have in mind?'})

  function welcomeIntent (assistant) {
    assistant.ask('Welcome to cityassistant..how can i help you...',
    ['Say any number', 'Pick a number', 'We can stop here. See you soon.']);
                    }


function rawInput (assistant) {
      if (assistant.getRawInput() === 'bye') {
       assistant.tell('Goodbye!');
      } else {
       const inputPrompt = assistant.buildInputPrompt(true, '<speak>You said, <say-as interpret-as="ordinal">' +
          assistant.getRawInput() + '</say-as></speak>',
            ['I didn\'t hear a number', 'If you\'re still there, what\'s the number?', 'What is the number?']);
        assistant.ask(inputPrompt);
      }
    }
    const actionMap = new Map();
    actionMap.set(WELCOME_INTENT, welcomeIntent);
    actionMap.set(LOOKUP_INTENT, lookupdataIntent);
    assistant.handleRequest(actionMap);


}

var exports = module.exports = {
  simpleResponse: simpleResponse
};
