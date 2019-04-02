var express = require('express')
var appServer = express()

var path = require('path');

//assuming app is express Object

appServer.get("/",function(req,res){

    res.sendFile(path.join(__dirname+'/clientUI/index.html'));
});

//assuming app is express Object

appServer.get("/index.js",function(req,res){

    res.sendFile(path.join(__dirname+'/clientUI/index.js'));
});


 //validateUser
 appServer.get('/validateUser', function (req,res){

//get Username
var userName = req.query.userName;

//get Password

var password= req.query.password;

// validateion


if(userName=="admin" && password=="admin"){
    res.send("Welcome");
}
else{
    res.send("Not allowed");
}

})
appServer.listen(5500)