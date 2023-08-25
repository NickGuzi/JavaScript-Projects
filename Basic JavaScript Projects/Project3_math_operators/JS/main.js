//Addition function
function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
//Subctraction Function
function subtraction_function() {
    var subtraction = 7 - 2;
    document.getElementById("Math!").innerHTML = "7 - 2 = " + subtraction;
}
//Multiplication function
function multiplication() {
    var multiplication = 6 * 2;
    document.getElementById("Math*").innerHTML = "6 * 2 = " + multiplication;
}
//Division function
function division() {
    var divide = 10 / 2;
    document.getElementById("Math/").innerHTML = "10 / 2 = " + divide;
}
//Multiple Operators Function
function multiple() {
    var multiple = 10 / 2 + 14 - (10*5);
    document.getElementById("MathMultiple").innerHTML = "10 / 2 + 14 - (10*5) = " + multiple;
}
//Modulus Function
function modulus() {
    var mod = 11 % 3;
    document.getElementById("Modulus").innerHTML = "11 % 3 = " + mod;
}
//Negation Function
function negation() {
    var X = 11;
    document.getElementById("Negation").innerHTML = -X;
}
//Increment Practice
A = 6;
A++;
document.write(A);
//Decrement Practice
B = 12;
B--;
document.write(B);
//Random Num Practice
window.alert(Math.random() * 100);
//Math Object Method practice
document.write(Math.round(6.7));