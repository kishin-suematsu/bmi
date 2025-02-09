const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

//simple calculator ex
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); // __dirname : return path of your present location
});

app.post("/", function(req, res){
   
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});
//for BMI calculator
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});


app.listen(port, function(){
    console.log("server is running on port 3000");
});