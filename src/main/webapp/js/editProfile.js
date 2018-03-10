/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("#oldPassword").focusout(function(){
       
        var oldPassword=$("#oldPassword").val();
        
        
        var JsonMessage={"oldPassword":oldPassword};
        
        $.ajax({
            method:'GET',
            url:"EditProfile" ,
            dataType: 'json',
            data:JsonMessage,
            success:function (response){
                if(response==true){
                    $('#wrongPassword').html("Wrong password ");
                    
                }else{
                    $('#wrongPassword').html("");
                 
                }
                
            }
            
        });
    });
});
  
        var name=$("#name");
        var oldPassword=$("#oldPassword");
        var newPassword=$("#newPassword");
        var birthDate=$("#birthDate");
        var Address=$("#Address");
        var job=$("#job");
        var creditLimit=$("#creditLimit").val();
    
function checkForm(form)
{

    $('#nametext').html("");

    $('#passtext').html("");
    $('#passconf').html("");
    $('#bdatetext').html("");
    $('#addresstext').html("");
    $('#jobtext').html("");
    $('#credtext').html("");
 
    
     if (name.val() === "") {
        $('#nametext').html("last name cannot be empty");
        //form.username.focus();
        return false;
    }
       
   

    if (oldPassword.val()!== "" ) {
        if (oldPassword.val().length < 6) {
           $('#passtext').html("pass length should be more tha 6 character"); 
            //form.pwd1.focus();
            return false;
        }
        
        re = /[0-9]/;
        if (!re.test(oldPassword.val())) {
            $('#passtext').html("OldPassword must contain at least one number (0-9)!");
            //form.pass.focus();
            return false;
        }
        re = /[a-z]/;
        if (!re.test(password.val())) {
            $('#passtext').html("password must contain at least one character (a-z)!");
            //form.pass.focus();
            return false;
        }


    } else {
        $('#passtext').html("pass cannot be empty ");
        //form.pass.focus();
        return false;
    }
    
   
          if (Address.val() === "") {
        $('#addresstext').html("address cannot be blank!");
        //form.username.focus();
        return false;
    }
    
     if (job.val() === "") {
        $('#jobtext').html("job cannot be blank!");
        //form.username.focus();
        return false;
    }
    
    if (creditLimit.val() === "") {
        $('#credtext').html("credit cannot be blank!");
        //form.username.focus();
        return false;
    }
    
     
    
       if (birthDate.val() === "") {
        $('#bdatetext').html("job cannot be blank!");
        //form.username.focus();
        return false;
    }
    
    

    
    return true;
}