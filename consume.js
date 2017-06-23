var request = require('request');
function get_trustyou(trust_you_id, callback) {
    var options = {
        uri : 'https://api.trustyou.com/hotels/'+trust_you_id+'/seal.json',
        method : 'GET'
    };
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res = 'Not Found';
        }
        callback(res);
    });
}

get_trustyou("674fa44c-1fbd-4275-aa72-a20f262372cd", function(resp){
    console.log(resp);
});
