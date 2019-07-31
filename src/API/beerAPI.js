function getBeerApiGET(callback) {
    var request = require('request');
    request('https://api.punkapi.com/v2/beers/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body); // Print the google web page.
        }
    });
};

function getMeBeer() {
    return new Promise(function (resolve, reject) {
        getBeerApiGET(function cb(val) {
            resolve(val);
        });
    });
}

function beerResult() {
    getMeBeer().then(data => {
        return(data)
    });
}

module.exports = {
    getBeer: getMeBeer
}