const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/nodeapi", { useNewUrlParser : true });

const app = express();
app.get("/", (request, response) => response.send("Hello world!"));
app.listen(3000);
