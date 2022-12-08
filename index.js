const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bookRouter = require("./router/book");
const authurRouter = require("./router/author");


dotenv.config(); 
// //connect database
 mongoose.connect("mongodb+srv://hoaiman:hoaiman@cluster0.v1wpxkq.mongodb.net/test", () => {
     console.log("connect to monggodb");
 })
 
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common")); 

//router
app.use("/v1/author", authurRouter);
app.use("/v1/book", bookRouter);

app.listen(8990, () => {
    console.log("Server is running ...")
});