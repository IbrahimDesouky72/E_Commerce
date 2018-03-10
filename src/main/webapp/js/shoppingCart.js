/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
    var products = val;
    //alert(val[1].name);
    $("#shoppingCart div").remove();
    $('#shoppingCart').append('<div class="title">Shopping Bag</div>');
    for (var i = 0; i < val.length; i++) 
    {
        $('#shoppingCart').append('<div class="item"><div class="buttons"><span class="delete-btn"></span><span class="like-btn"></span></div><div class="image"><img width="80" height="90" src="'+products[i].image+'" alt="" /></div><div class="description"><span>'+products[i].name+'</span><span>'+products[i].description+'</span><span>'+products[i].category+'</span></div><div class="quantity"><button class="plus-btn" type="button" name="button"><img src="plus.svg" alt="" /></button><input type="text" name="name" value="'+products[i].quantity+'"><button class="minus-btn" type="button" name="button"><img src="minus.svg" alt="" /></button></div><div class="total-price">LE'+products[i].salary+'</div></div>');
    }


}
