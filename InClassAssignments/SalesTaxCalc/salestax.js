var $ = function(id) {
    return document.getElementById(id);
};

var calculate = function() {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);
    var shippingCharges = parseFloat($("shipping_charges").value);
    var salesTax;
    var total;
    
    /*if (isNaN(subtotal) || isNaN(taxRate) || isNaN(shippingCharges)) {
        alert("Please enter numbers");
        return false;
    }*/
    
    salesTax = subtotal * (taxRate / 100);
    
    total = subtotal + salesTax + shippingCharges;
    
    $("sales_tax").value = "$" + salesTax.toFixed(2);
    
    $("total").value = "$" + total.toFixed(2);
    
};

window.onload = function(){
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("shipping_charges").value = "";
    $("calculate").onclick = calculate;
};