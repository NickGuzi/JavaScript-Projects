// concat method practice 
function sentence() {
    var first = "How much";
    var second = " wood could a";
    var third = " woodchuck chuck if";
    var fourth = " a woodchuck could chuck wood";
    var whole = first.concat(second, third, fourth);
    document.getElementById("Concatenate").innerHTML = whole;
}

//slice method practice 
function slicing() {
    var sentence = "Slicing and dicing is fun before your arm gets tired";
    var section = sentence.slice(0, 8);
    document.getElementById("Slice").innerHTML = section;
}

//toUpperCase method and search method practice 
function upper() {
    var phrase = "uppercase is so great!";
    var section = phrase.toUpperCase();
    document.getElementById("Upper").innerHTML = section;
}

function search() {
    var phrase = "I am trying to locate the position of this";
    var section = phrase.search("this");
    document.getElementById("Search").innerHTML = section;
}

//toString method practice 
function numString() {
    var X = 830; 
    document.getElementById("numString").innerHTML = X.toString();
}

//toPrecision method practice 
function toPrecise() {
    var X = 830.2000;
    document.getElementById("precise").innerHTML = X.toPrecision(4);
}

//toFixed and valueOf method practice 
function fixed() {
    var X = 830.211;
    document.getElementById("Fixed").innerHTML = X.toFixed();
}

//toPrecision method practice 
function valueFunc() {
    let text = "What's Up!";
    let result = text.valueOf();
    document.getElementById("Val").innerHTML = result;
}