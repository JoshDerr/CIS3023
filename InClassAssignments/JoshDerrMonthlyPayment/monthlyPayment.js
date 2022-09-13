var $ = function(id) {
    return document.getElementById(id);
};

var calculate = function() {
    var initialLoanAmount = parseFloat($("initial_loan_amount").value);
    var monthsOfLoan = parseFloat($("months_of_loan").value);
    var annualInterest = parseFloat($("annual_interest").value);
    var monthlyInterestRate = annualInterest / 1200;
    var monthlyPayment;
    
    monthlyPayment = initialLoanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, monthsOfLoan * -1)));
        
    $("monthly_payment").value = "$" + monthlyPayment.toFixed(2);
    
};

window.onload = function(){
    $("initial_loan_amount").value = "";
    $("months_of_loan").value = "";
    $("annual_interest").value = "";
    $("calculate").onclick = calculate;
};