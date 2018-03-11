/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var products;

function decrementQuantity(val , quantity)
{

//$('.plus-btn').on('click', function(e) {
        //e.preventDefault();
        var $this = $('#'+val);
        //var $input = $this.closest('div').find('input');
        var value = parseInt($this.val());

        if (value > 1) {
                value = value - 1;
        } else {
                value = 1;
        }

        $this.val(value);   
}

    function incrementQuantity(val , quantity)
    {
    	//$('.plus-btn').on('click', function(e) {
    		//e.preventDefault();
    		var $this = $('#'+val);
    		//var $input = $this.closest('div').find('input');
    		var value = parseInt($this.val());

    		if (value < quantity) {
      		value = value + 1;
    		} else {
    			value =quantity;
    		}

    		$this.val(value);
    	//});
    }


//
//      $('.like-btn').on('click', function() {
//        $(this).toggleClass('is-active');
//      });
      
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
        $('#shoppingCart').append('<div id = "tag'+products[i].id+'" class="item"><div class="buttons"><span class="delete-btn" onclick = "deleteItemFromCart('+products[i].id+')" ></span><span class="like-btn"></span></div><div class="image"><img width="80" height="90" src="'+products[i].image+'" alt="" /></div><div class="description"><span>'+products[i].name+'</span><span>'+products[i].description+'</span><span>'+products[i].category+'</span></div><div class="quantity"><button class="plus-btn" onclick="incrementQuantity('+products[i].id+','+products[i].quantity+')" type="button" name="button"><img src="plus.svg" alt="" /></button><input id="'+products[i].id+'" class="product_quan" type="text" name="name" value="1"><button class="minus-btn" onclick="decrementQuantity('+products[i].id+','+products[i].quantity+')" type="button" name="button"><img src="minus.svg" alt="" /></button></div><div class="total-price">LE'+products[i].salary+'</div></div>');
    }
    $('#shoppingCart').append('<div class="item">'+
        '<div><a class ="btn" href="" onclick="buy_products()">Buy Products</a></div>'+
      '</div>');
}

function buy_products(){
    
    var product_quan = $(".product_quan"); 
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) 
    {
        // totalPrice + = selected_quan_by_user + price ;
        totalPrice += product_quan[i].value * products[i].salary;
        //alert(products[i].id + "quan = " +product_price[i].textContent.substring(2));
        alert(totalPrice);
    }
    alert("final: "+totalPrice);
    
}


function deleteItemFromCart(id) {
    //var productId = $('div[id^="tag"]').attr('value');
    var productId = id;
    $.ajax({
        url: 'DeleteProuductFromCart',
        type: 'GET',
        contentType: 'application/json',
        data:{"productId" : productId},
        dataType: 'json',
        success: deleteItemFromCartCallback
    });
}

function deleteItemFromCartCallback(val) {
    var messages = val;

    $('#tag'+val).remove();
}
