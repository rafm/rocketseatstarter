const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

mongoose.connect("mongodb://mongo:27017/nodeapi", { useNewUrlParser : true });
requireDir("./models");

const Product = mongoose.model("Product");

const app = express();
app.get("/", (request, response) => {
    // Product.create({
    //     title: "React Native",
    //     description: "Build native apps with React",
    //     url: "http://github.com/facebook/react-native"
    // });
    response.send("Hello world!")
});
app.listen(3000);
