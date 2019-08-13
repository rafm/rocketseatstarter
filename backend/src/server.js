const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

mongoose.connect("mongodb://mongo:27017/nodeapi", { useNewUrlParser : true });
requireDir("./models");

express()
    .use(express.json())
    .use('/api', require("./routes"))
    .listen(3000);
