const express = require('express');
const mongoose = require('./mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
var cors = require("cors");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


routes.setRouting(app);

app.listen(port,() => {
    console.log("Express server listen on port "+port);
})

module.exports = app;