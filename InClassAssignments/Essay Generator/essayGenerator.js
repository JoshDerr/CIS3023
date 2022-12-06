var $ = function(id) {
    return document.getElementById(id);
};

function getArticle() {
    var articlesString = $("articles").value;
    var articles = articlesString.split(" ");
    var randomIndex = Math.floor(Math.random() * articles.length);
    
    return articles[randomIndex];
}//getArticle

function getNoun() {
    var nounsString = $("nouns").value;
    var nouns = nounsString.split(" ");
    var randomIndex = Math.floor(Math.random() * nouns.length);
    
    return nouns[randomIndex];
}//getNoun

function getVerb() {
    var verbsString = $("verbs").value;
    var verbs = verbsString.split(" ");
    var randomIndex = Math.floor(Math.random() * verbs.length);
    
    return verbs[randomIndex];
}//getVerb

function getAdjective() {
    if (Math.random() < 0.5) {
        return "";
    }//if
    
    var adjectives = new Array();
    var adjectivesString = $("adjectives").value;
    adjectives = adjectivesString.split(" ");
    var randomIndex = Math.floor(Math.random() * adjectives.length);
    
    return (adjectives[randomIndex] + " ");
}//getAdjective

function getPreposition() {
    var prepositionsString = $("prepositions").value;
    var prepositions = prepositionsString.split(" ");
    var randomIndex = Math.floor(Math.random() * prepositions.length);
    
    return prepositions[randomIndex];
}//getPreposition

function getSentence() {
    var sentence = (getArticle() + " " + getAdjective() + getNoun() + " " + getVerb() + " " + getPreposition() + " " + getArticle() + " " + getAdjective() + getNoun() + ". ");
    var firstLetter = sentence.charAt(0);
    var finalSentence = firstLetter.toUpperCase() + sentence.substring(1, sentence.length);
    
    return finalSentence;
}//getSentence

function genEssay() {
    var numSentences;
    var everyNth = Math.floor(Math.random() * 5) + 8;
    
    for ( ; ; ) {
        numSentences = parseInt(prompt("How many sentences in essay, positive number ?"));
        
        if (!isNaN(numSentences) && numSentences > 0) {
            break;
        }//if
        
    }//for
    
    var tempEssay = "";
    
    for (var i = 0; i < numSentences; i++) {
        tempEssay += getSentence();
        
        if ((i % everyNth) == 0) {
            tempEssay += "\n \n ";
        }//if
        
    }//for
    
    $("essay").value = tempEssay;
    
}//genEssay

function eventHandler() {
    $("generate").onclick = genEssay;
}//eventHandler

window.onload = function(){
    eventHandler();
}//onload