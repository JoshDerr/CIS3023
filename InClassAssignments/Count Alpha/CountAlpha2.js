var $ = function(id){
    return document.getElementById(id);
}

function main() {
    
    var currentString = "";
    var currentChampion = "";
    
    for ( ; ; ) {
        currentString = prompt("Please enter a string or *** to break");
        
        if (currentString == "***") {
            break;
        }
        
        if (countAlpha2(currentString) > countAlpha2(currentChampion)) {
            currentChampion = currentString;
        }
        
    }//for
    
    alert("The string with max is " + currentChampion + " with " + countAlpha2(currentChampion) + " unique letters");
    
}//main

function countAlpha2(stringToBeCounted) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ACDEFGHIJKLMNOPQRSTUVWXYZ";
    var totalUnique = 0;
    
    //DOESN'T WORK CORRECTLY
    
    for (var i = 0; i < lowerCase.length; i++) {
        if (stringToBeCounted.includes(lowerCase.charAt(i), 0)) {
            totalUnique++;
        }
        if (stringToBeCounted.includes(upperCase.charAt(i), 0)) {
            totalUnique++; 
        }
    }//for
    
    return (totalUnique);

}//countAlpha

window.onload = function(){
    $("runCountAlpha").onclick = main;
}