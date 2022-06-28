const express = require("express");
const PORT = 8000;
const axios = require("axios");
require("dotenv/config");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const cors= require("cors");


const app = express();

//middleware //
// adding parser in res we have details in that we have out data in header we will add data to in res to handle storing in body..
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use('/',cors(),require('./routes'));



app.listen(PORT, (req, res) => {
  console.log("server is UP");
});
