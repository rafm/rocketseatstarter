const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

mongoose.connect("mongodb://mongo:27017/nodeapi", { useNewUrlParser : true });
requireDir("./src/models");

express()
    .use(express.json())
    .use(cors())
    .use('/api', require("./src/routes"))
    .listen(3000);
