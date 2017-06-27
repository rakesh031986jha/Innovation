

function  slackReq(){
var apiagentreq= req.body.result && req.body.result.parameters;
var resagent='How can i help You ';
console.log('request are'+apiagentreq);
return response.json({
  speech:resagent,
  displayText: resagent,
  source:''
});
}
module.exports.slackrequest = slackrequest;
