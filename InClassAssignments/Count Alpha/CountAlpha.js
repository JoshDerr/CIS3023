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
        
        if (countAlpha(currentString) > countAlpha(currentChampion)) {
            currentChampion = currentString;
        }
        
    }//for
    
    alert("The string with max is " + currentChampion + " with " + countAlpha(currentChampion) + " unique letters");
    
}//main

function countAlpha(stringToBeCounted) {
    var uniqueStr = "";
    
    for (var i = 0; i < stringToBeCounted.length; i++) {
        
        if (!uniqueStr.includes(stringToBeCounted.charAt(i), 0)) {
            uniqueStr += stringToBeCounted.charAt(i);
        }
        
    }//for
    
    return (uniqueStr.length);
    
}//countAlpha

window.onload = function(){
    $("runCountAlpha").onclick = main;
}