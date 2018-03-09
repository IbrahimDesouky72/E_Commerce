/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i = 0;

function refreshCart(id) {
    //var productId = $('div[id^="tag"]').attr('value');
    var productId = id;
    alert("id="+productId);
    $.ajax({
        url: 'AddToCart',
        type: 'GET',
        contentType: 'application/json',
        data:{"productId" : productId},
        dataType: 'json',
        success: refreshCounter
    });
}
function refreshCounter (val)
{
    alert("xxx");
    i++;
    $('#checkout_items').text(val);
}
