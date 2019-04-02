function validateUser(){
    
//get Username
var userName = document.getElementsByName("usernName")[0].value;

//get Password

var password= document.getElementsByName("password")[0].value;

// validateion
$.get("/validateUser?userName="+userName+"&password="+password,
function(data){
    alert(data)
});

}
