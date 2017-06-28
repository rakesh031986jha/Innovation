
const ApiAiApp = require('actions-on-google').ApiAiApp;

function simpleResponse (req, res) {
  console.log('inside simpleResponse');
  const appapi = new ApiAiApp({request: req, response: res});
  const WELCOME_INTENT = 'input.welcome';
  const LOOKUP_INTENT = 'input.lookup_citidata';
  const actionMap = new Map();
  actionMap.set(WELCOME_INTENT, welcomeIntent);
  actionMap.set(LOOKUP_INTENT, lookupdataIntent);
  appapi.handleRequest(actionMap);


};


function welcomeIntent (appapi) {
  console.log('inside welcomeIntent');
  appapi.ask('Welcome to cityassistant..how can i help you...');
}

function lookupdataIntent (appapi) {
console.log('inside look up intent');
var jsonParser = require('../../dataprocess/microstrategyReportParser');
//let contexts = appapi.getContexts();
//console.log('CONTEXTS are'+contexts)
const finData='financial balance sheet.';
  const compName = appapi.getArgument('company_name');
  const year=appapi.getArgument('year');

  const financialdata=appapi.getArgument('finanacial_balance_data');
  const financedataforParse=finData+financialdata;
  console.log('arguments are'+compName);
  console.log('year is'+year);
    console.log('financedataforParse is'+financedataforParse);
var result=jsonParser.processJSON(compName,year,financedataforParse);
console.log('result is'+result);

if(result==null){
  appapi.tell(' Sorry we dont have the data for what you have asked..You asked for company name  ' +
  compName + ' for year '+year + ' for '+ financialdata );
}
else{
  appapi.tell(' We have got the data you asked for.You asked for company name  ' +
  compName + ' for year '+year + ' for '+ financialdata +'. It is '+result);
}
}



var exports = module.exports = {
  simpleResponse: simpleResponse
};
