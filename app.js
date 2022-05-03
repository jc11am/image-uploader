const express = require("express");
const app = express();

app.use(express.json());

//set view engine
app.set("view engine", "ejs")

//load static files
app.use(express.static("public"));


//routes
app.use("/", require("./server/routes/routes"));

app.listen(3000, function(){
    console.log("success")
});