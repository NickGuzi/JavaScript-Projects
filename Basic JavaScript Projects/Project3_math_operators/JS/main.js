function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {
    var subtraction = 7 - 2;
    document.getElementById("Math!").innerHTML = "7 - 2 = " + subtraction;
}

function multiplication() {
    var multiplication = 6 * 2;
    document.getElementById("Math*").innerHTML = "6 * 2 = " + multiplication;
}

function division() {
    var divide = 10 / 2;
    document.getElementById("Math/").innerHTML = "10 / 2 = " + divide;
}

function multiple() {
    var multiple = 10 / 2 + 14 - (10*5);
    document.getElementById("MathMultiple").innerHTML = "10 / 2 + 14 - (10*5) = " + multiple;
}

function modulus() {
    var mod = 11 % 3;
    document.getElementById("Modulus").innerHTML = "11 % 3 = " + mod;
}

function negation() {
    var X = 11;
    document.getElementById("Negation").innerHTML = -X;
}

A = 6;
A++;
document.write(A);

B = 12;
B--;
document.write(B);

window.alert(Math.random() * 100);

document.write(Math.round(6.7));