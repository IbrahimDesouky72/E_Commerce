/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//setInterval(ajaxCallToPopulateTable, 3000); //300000 MS == 5 minutes
$(function(){
   ajaxCallToPopulateTableProducts();
});

function ajaxCallToPopulateTableProducts() {
    $.post("GetProductsToAdmin",{},ajaxCallBack_products,"json");
}

function ajaxCallBack_products(responseTxt,statusTxt,xhr){
    if(statusTxt=='success'){
        //alert(responseTxt.msg+" , "+responseTxt.username);
        var output = '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
              '<thead>'
                +'<tr>'
                  +'<th>Image</th>'
                  +'<th>Product</th>'
                  +'<th>Description</th>'
                  +'<th>Quanitity</th>'
                  +'<th>Price</th>'
                  +'<th>Category</th>'
                  +'<th>Manage</th>'
                +'</tr>'
              +'</thead>'
              +'<tfoot>'
                +'<tr>'
                  +'<th>Image</th>'
                  +'<th>Product</th>'
                  +'<th>Description</th>'
                  +'<th>Quanitity</th>'
                  +'<th>Price</th>'
                  +'<th>Category</th>'
          +'<th>Manage</th>'
                +'</tr>'
              +'</tfoot>'
              +'<tbody>';
      
        var tr='';
        
        for(var i in responseTxt){
            
            var res_id = responseTxt[i].id;
            var res_name = responseTxt[i].name;
            var res_description = responseTxt[i].description;
            var res_quanitity = responseTxt[i].quantity;
            var res_price = responseTxt[i].salary;
            var res_image = responseTxt[i].image;
            var res_category = responseTxt[i].category;
            
            tr += '<tr>';
                tr += '<td><img src="'+res_image+'" alt="'+res_name+'" width="100" height="120"></td>';
                tr += '<td>'+res_name+'</td>';
                tr += '<td>'+res_description+'</td>';
                tr += '<td>'+res_quanitity+'</td>';
                tr += '<td>'+res_price+'</td>';
                tr += '<td>'+res_category+'</td>';
            tr +='</tr>';
        }
            
        output += tr+'</tbody>'
                +'</table>';
        
        $("#products").html(output);
        
    }else
        alert("Error:"+xhr.status+":"+xhr.statusTxt);
}

