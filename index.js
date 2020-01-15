const express = require("express");
const bodyParser =require("body-parser");

const app = express();
const port = 3000;
const router = require("./router.js");
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(router);

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(port, () => console.log('app listening on port 3000'));

module.exports = app;
