const request = require("request");
let url = "https://official-joke-api.appspot.com/random_ten";

const serveJoke = function(req, res) {
  request(url, function(error, response, body) {
    console.log(error);
    console.log(response);
    body = JSON.parse(body);
    res.send(`==>${body[0].setup} \n ===>>${body[0].punchline}`);
  });
};

module.exports = { serveJoke };
