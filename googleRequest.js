
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
  var parsherData = require('./MicrostrategyCitiReportParser');

console.log('inside look up intent');
  const compName = appapi.getArgument('company_name');
  const year=appapi.getArgument('date-period');
  const financialdata=appapi.getArgument('finanacial_balance_data');
  console.log('arguments are'+compName +'year'+year+'financialdata'+financialdata)
  appapi.tell(' We have got the data you asked for.You asked for company name  ' +
  compName + 'for year'+year + ' for'+ financialdata);
  parsherData.processJSON(compName,year,financialdata);

}



var exports = module.exports = {
  simpleResponse: simpleResponse
};
