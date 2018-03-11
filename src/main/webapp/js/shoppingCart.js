/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ary = [];
var products;

      $('.minus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value > 1) {
    			value = value - 1;
    		} else {
    			value = 0;
    		}

        $input.val(value);

    	});

    	$('.plus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value < 100) {
      		value = value + 1;
    		} else {
    			value =100;
    		}

    		$input.val(value);
    	});

      $('.like-btn').on('click', function() {
        $(this).toggleClass('is-active');
      });
      
function refresh() {
    $.ajax({
        url: 'AddToCart',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        success: refreshCart
    });
}

function refreshCart(val) {
    products = val;
    //alert(val[1].name);
    $("#shoppingCart div").remove();
    $('#shoppingCart').append('<div class="title">Shopping Bag</div>');
    for (var i = 0; i < val.length; i++) 
    {
        $('#shoppingCart').append('<div class="item"><div class="buttons"><span class="delete-btn"></span><span class="like-btn"></span></div><div class="image"><img width="80" height="90" src="'+products[i].image+'" alt="" /></div><div class="description"><span>'+products[i].name+'</span><span>'+products[i].description+'</span><span>'+products[i].category+'</span></div><div class="quantity"><button class="plus-btn" type="button" name="button"><img src="plus.svg" alt="" /></button><input class="product_quan" type="text" name="name" value="'+products[i].quantity+'"><button class="minus-btn" type="button" name="button"><img src="minus.svg" alt="" /></button></div><div class="total-price">LE'+products[i].salary+'</div></div>');
    }
    $('#shoppingCart').append('<div class="item">'+
        '<div><Button class ="btn" onclick="buy_products()">Buy Products</Button></div>'+
      '</div>');
}

function buy_products(){
    
    var product_quan = $(".product_quan"); 
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) 
    {
        // totalPrice + = selected_quan_by_user + price ;
        totalPrice += product_quan[i].value * products[i].salary;
        pushToAry("product_id", products[i].id, "quantity", product_quan[i].value);
    }
    ajaxCallToCheckCreditLimit(totalPrice);
}

function ajaxCallToCheckCreditLimit(totalPrice){
     $.get("CheckPayment?total_price="+totalPrice,ajaxCallBack_users);
}

function ajaxCallBack_users(responseTxt,statusTxt,xhr){
    if(statusTxt=='success'){
        if(responseTxt == 'true'){
            alert(arayJsonString);
            var data_str = JSON.stringify(ary);
            data_str = encodeURIComponent(data_str);
            document.location.href = 'DoPayment?products_in_bag='+data_str;
            //document.location.href = 'DoPayment?products_in_bag='+arayJsonString;
            /*var x= '';
            for (i in ary) {
                x += "<h2>" + ary[i].product_id + "</h2>";
                x += ary[i].quantity+ "<br>";
            }
            alert(x);*/
        }else{
            alert("Your credit is Not Enough!");
        }
    }else
        alert("Error:"+xhr.status+":"+xhr.statusTxt);
}

function pushToAry(name1, val1, name2, val2) {
   var obj = {};
   obj[name1] = val1;
   obj[name2] = val2;
   ary.push(obj);
}
