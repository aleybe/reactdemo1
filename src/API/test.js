var beerme = require('./beerAPI.js');

beerme.getBeer().then(data => {
    console.log(data);
})