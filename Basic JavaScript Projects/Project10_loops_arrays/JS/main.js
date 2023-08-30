//Practice with while loop
function Call_Loop() {
    var Digit = "";
    var i = 0;
    while (i <= 10) {
        Digit += "<br>" + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Practice with string length operator 
function strLen() {
    var text = "Hello World!";
    var length = text.length;
    document.getElementById("len").innerHTML = length;
}

//Practice with for loop
function for_loop() {
    var bands = ["Led Zeppelin", "Black Sabbath", "Motley Crue", "Guns&Roses", "The Jimi Hendrix Experience"];
    var result = "";
    var i;
    for (i = 0; i < bands.length; i++) {
        result += bands[i] + "<br>";
    }
    document.getElementById("for").innerHTML = result;
}

//Practice with arrays
function arrays() {
    var bands = ["Led Zeppelin", "Black Sabbath", "Motley Crue", "Guns&Roses", "The Jimi Hendrix Experience"];
    document.getElementById("array").innerHTML = "The best band ever is " + bands[1];
}

//Practice with constants
function con() {
    const instrument = { type: "guitar", brand: "Gibson", color: "brown" };
    instrument.style = "Les Paul";
    instrument.price = "$900";
    document.getElementById("con").innerHTML = "The cost of the " +
        instrument.brand + " " + instrument.style + " is " + instrument.price;
}

//Practice with return statement 
function ret(X, Y) {
    return X * Y;
}
document.getElementById("ret").innerHTML = ret(6, 7);

//Practice with objects
let car = {
    make: "Chevy ",
    model: "Malibu ",
    year: "2015 ",
    color: "maroon ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("object").innerHTML = car.description();

//Practice with break and continue statements 
function breaking() {
    var bands = ["Led Zeppelin", "Black Sabbath", "Motley Crue", "Guns&Roses", "The Jimi Hendrix Experience"];
    var out = "";
    var i;
    for (i = 0; i < bands.length; i++) {
        if (i === 3) break;
        out += bands[i] + "<br>";
    }
    document.getElementById("break").innerHTML = out;
}

function cont() {
    var bands = ["Led Zeppelin", "Black Sabbath", "Motley Crue", "Guns&Roses", "The Jimi Hendrix Experience"];
    var out = "";
    var i;
    for (i = 0; i < bands.length; i++) {
        if (i === 3) continue;
        out += bands[i] + "<br>";
    }
    document.getElementById("continue").innerHTML = out;
}

//Practice with switch statements 
function bandFunc() {
    var band_output;
    var band = document.getElementById("bandInpt").value;
    var band_string = " is an awesome band!";
    switch (band) {
        case "Led Zeppelin":
            band_output = "Led Zeppelin" + band_string;
        break;
        case "Black Sabbath":
            band_output = "Black Sabbath" + band_string;
        break;
        case "Motley Crue":
            band_output = "Motley Crue" + band_string;
        break;
        case "Guns&Roses":
            band_output = "Guns&Roses" + band_string;
        break;
        case "Jimi Hendrix Experience":
            band_output = "Jimi Hendrix Experience" + band_string;
        break;
        default:
            band_output = "Please enter a band name exactly as written on the list.";
    }
    document.getElementById("band").innerHTML = band_output;
}