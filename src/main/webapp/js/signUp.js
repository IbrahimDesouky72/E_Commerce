/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    
   var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


$(document).ready(function(){
    $("#register").click(function(){
        var fname=$("#fname").val();
        var lname=$("#lname").val();
        var email=$("#email").val();
        var password=$("#password").val();
        var birthDate=$("#birthDate").val();
        var Address=$("#Address").val();
        var job=$("#job").val();
        var creditLimit=$("#creditLimit").val();
        
        
        
        
        var JsonMessage={"fname":fname,"lname":lname,"email":email,"password":password,"birthDate":birthDate,"Address":Address
            ,"job":job,"creditLimit":creditLimit};
        
        $.ajax({
            
            url:"SignUp" ,
            dataType: 'json',
            data:JsonMessage,
            success:function (response){
                if(response==true){
                    window.location="login.html";
                }else{
                    $('#emailexist').html("The Email is Already exist");
                }
                
            }
            
        });
    });
});
    



