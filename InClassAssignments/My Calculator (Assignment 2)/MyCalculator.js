var firstInputVariable;
var secondInputVariable;
var total;

function menu() {

for (var menuActionSelection = parseInt(prompt("Calculator Menu \n1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Exponent \n6. Mean \n7. Quit")); (menuActionSelection < 1) || (menuActionSelection > 7) || (isNaN(menuActionSelection)); menuActionSelection = parseInt(prompt("ERROR, Invalid Selection: \nCalculator Menu \n1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Exponent \n6. Mean \n7. Quit")));
    if (menuActionSelection == 1) {
        calculateAddition();
    }
    else if (menuActionSelection == 2) {
        calculateSubtraction();
    }
    else if (menuActionSelection == 3) {
        calculateMultiplication();
    }
    else if (menuActionSelection == 4) {
        calculateDivision();
    }
    else if (menuActionSelection == 5) {
        calculateExponential();
    }
    else if (menuActionSelection == 6) {
        calculateMean();
    }
    else {
        quit();
    }
}

menu();

function calculateAddition() {
    for (firstInputVariable = parseFloat(prompt("Enter first number:")); isNaN(firstInputVariable); firstInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter first number:")));
    
    for (secondInputVariable = parseFloat(prompt("Enter second number:")); isNaN(secondInputVariable); secondInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter second number:")));
    
    total = firstInputVariable + secondInputVariable;
    
    alert("Result is: \n" + total);
    
    menu();
} //calculateAddition

function calculateSubtraction() {
    for (firstInputVariable = parseFloat(prompt("Enter first number:")); isNaN(firstInputVariable); firstInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter first number:")));
            
    for (secondInputVariable = parseFloat(prompt("Enter second number:")); isNaN(secondInputVariable); secondInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter second number:")));
            
    total = firstInputVariable - secondInputVariable;
            
    alert("Result is: \n" + total);
    
    menu();
} //calculateSubtraction

function calculateMultiplication() {
    for (firstInputVariable = parseFloat(prompt("Enter first number:")); isNaN(firstInputVariable); firstInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter first number:")));
            
    for (secondInputVariable = parseFloat(prompt("Enter second number:")); isNaN(secondInputVariable); secondInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter second number:")));
    
    total = firstInputVariable * secondInputVariable;
    
    alert("Result is: \n" + total);
    
    menu();
} //calculateMultiplication

function calculateDivision() {
    for (firstInputVariable = parseFloat(prompt("Enter numerator number:")); isNaN(firstInputVariable); firstInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter numerator number:")));
            
    for (secondInputVariable = parseFloat(prompt("Enter denominator number greater than or equal to zero:")); isNaN(secondInputVariable) || secondInputVariable < 0; secondInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter denominator number greater than zero:")));
       
    total = firstInputVariable / secondInputVariable;
    
    alert("Result is: \n" + total);
    
    menu();
} //calculateDivision

function calculateExponential() {
    for (firstInputVariable = parseFloat(prompt("Enter base number:")); isNaN(firstInputVariable); firstInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter base number:")));

    for (secondInputVariable = parseFloat(prompt("Enter an exponent number:")); isNaN(secondInputVariable); secondInputVariable = parseFloat(prompt("ERROR, Invalid Input \nEnter an exponent number:")));
    
    total = Math.pow(firstInputVariable, secondInputVariable);
    
    alert("Result is: \n" + total);
    
    menu();
} //calculateExponential

function calculateMean() {
    var seriesOfNumbers = "";
    var meanTotal = 0;
    var meanCounter = 0;
    var calculatedMean = 0;
    
    for ( ; ; ) {
        seriesOfNumbers = prompt("Please enter a series of numbers or '***' to end:");
                
        if (!isNaN(parseFloat(seriesOfNumbers))) {
            meanTotal += parseFloat(seriesOfNumbers);
            meanCounter++;
        }
        else if (seriesOfNumbers == "***") {
            break;
        }
        else {
            alert("ERROR, Invalid Input \nPlease enter a series of numbers or '***' to end:");
        }
        
    }
            
    calculatedMean = meanTotal / meanCounter;
            
    alert("Result is: \n" + calculatedMean);
    
    menu();
} //calculateMean

function quit() {
    alert("Thank you for using my calculator, goodbye 🎃");
} //quit
