const express = require("express");
const app = express();
const userModel = require("./usermodel");//iske andar model aa chuka hai
app.get("/",function(req,res){
    res.send("hey");
    console.log("chai leke aa");
})
app.get("/create",async function(req,res){
    let createduser = await userModel.create({ //async operation:meaning iske baad ke code bhi pehle chal jaayega
        name :"harsh",
        email :"harsh@gmail.com",
        username : "harsh"
    })
    res.send(createduser);
    console.log("hey");//sync hai ye
})
app.get("/read",async function(req,res){
    let readuser = await userModel.find({username:"harsh"});//array hamesha aayega
    res.send(readuser);
    console.log("hey");//sync hai ye
})
app.get("/update",async function(req,res){
    let updateduser = await userModel.findOneAndUpdate({username:"harsh"},{name:"harsh vandana"},{new:true});
    res.send(updateduser);
    console.log("hey");//sync hai ye
})
app.get("/delete",async function(req,res){
    let deleteuser = await userModel.findOneAndDelete({username:"harsh"});
    res.send(deleteuser);
    console.log("hey");//sync hai ye
})
app.listen(3000);