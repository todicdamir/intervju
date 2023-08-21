const express = require("express");
const numberRoutes = require("./routes/numbers");
const cors =require("cors");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(numberRoutes);
app.listen(3000);