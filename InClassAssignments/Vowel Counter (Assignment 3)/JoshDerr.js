for ( ; ; ) {
    var userInput = "";
    var numVowels = 0;
    
    userInput = prompt("Please enter a string or \"***\" to exit");
    
    if (userInput == "***") {
        alert("Thanks for using my vowel counter");
        break;
    }//if
    
    for (i = 0; i < userInput.length; i++) {
        if (userInput.charAt(i).toUpperCase() == "A" || userInput.charAt(i).toUpperCase() == "E" || userInput.charAt(i).toUpperCase() == "I" || userInput.charAt(i).toUpperCase() == "O" || userInput.charAt(i).toUpperCase() == "U") {
            numVowels++;
        }
    }//for
    
    alert("The number of vowels is " + numVowels);

}//for