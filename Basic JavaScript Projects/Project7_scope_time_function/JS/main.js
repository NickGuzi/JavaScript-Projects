//local and global variable practice
var X = 9;

function add() {
    var Y = 11;
    document.write(X + 10 + "<br>");
    document.write(Y + 12 + "<br>");
}
add();

function subtract() {
    document.write(X - 4 + "<br>");
}
subtract();

//Conditional Practice
function getDate() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greet").innerHTML = "Good Morning!";
    }
    else {
        document.getElementById("Greet").innerHTML = "Good Afternoon!";
    }
}

function age() {
    Age = document.getElementById("Age").value
    if (Age < 13) {
        AgeLevel = "You are a child";
    }
    else if (Age >= 13 && Age <= 19) {
        AgeLevel = "You are a teen";
    }
    else {
        AgeLevel = "You are an adult"
    }
    document.getElementById("howOld").innerHTML = AgeLevel;
}  

