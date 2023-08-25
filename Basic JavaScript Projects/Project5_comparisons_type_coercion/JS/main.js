//Practice with typeof operator
document.write(typeof 10);

//Practice with coercion
document.write("10" + 5);

//Practice with NaN
function nan() {
    document.getElementById("Test").innerHTML = 0 / 0;
}

//Practice with isNaN
function isnan1() {
    document.getElementById("Test2").innerHTML = isNaN("Is this a num?");
}

function isnan2() {
    document.getElementById("Test3").innerHTML = isNaN(11);
}

//Infinity Practice 
function infinity() {
    document.getElementById("Test4").innerHTML = 6E310;
}

function neginfinity() {
    document.getElementById("Test5").innerHTML = -6E310;
}

//Boolean Practice
function tru() {
    document.getElementById("Test6").innerHTML = (10>2);
}

function fals() {
    document.getElementById("Test7").innerHTML = (10<2);
}

//Console.log practice
console.log(3 * 2);

console.log(3 > 15);

//== Practice
function bool1() {
    document.getElementById("Test8").innerHTML = (10 == 10);
}

function bool2() {
    document.getElementById("Test9").innerHTML = (10 == 9);
}

//=== Practice
function bool3() {
    document.getElementById("Test10").innerHTML = (10 === 10);
}

function bool4() {
    document.getElementById("Test11").innerHTML = (10 === "Dog");
}

//&& || Practice
function bool5() {
    document.getElementById("Test12").innerHTML = (10 == 10 && 11 > 10);
}

function bool6() {
    document.getElementById("Test13").innerHTML = (10 == 10 && 11 < 10);
}

function bool7() {
    document.getElementById("Test14").innerHTML = (10 == 10 || 11 < 10);
}

function bool8() {
    document.getElementById("Test15").innerHTML = (10 == 11 || 11 < 10);
}

//! Practice 
function bool9() {
    document.getElementById("Test16").innerHTML = !(10 > 8);
}

function bool10() {
    document.getElementById("Test17").innerHTML = !(10 < 6);
}