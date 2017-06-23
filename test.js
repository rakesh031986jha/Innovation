var http = require("http");

function getJson(options, cb){
  http.request(options, function(res){
    var body = '';
    res.on('data', function(chunk){
      body+=chunk;
    });
    res.on('end', function(){
      var results = JSON.parse(body);
    cb(null, results);
  });
  res.on(error, cb);

  })
  .on('error',cb)
  .end();

}
var options ={
  host: 'api-sandbox.oanda.com',
  port: 80,
  path: '/v1/quote?instruments=USD_ZAR',
  method: 'GET'
};

getJson(options, function(err, results){
  if(err){
    retrun console.log('dont try to consume web service bcz consumeing not happeing',err);
  }
  console.console.log(results);
})
