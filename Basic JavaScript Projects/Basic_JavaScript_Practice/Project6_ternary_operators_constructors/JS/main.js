//Ternary operator practice
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";

}

function VotingAge_Function() {
    var Vote, Can_vote;
    Vote = document.getElementById("Vote").value;
    Can_vote = (Vote < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Voter").innerHTML = Can_vote + " to vote";

}

//constructor practice
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function keyCon() {
    document.getElementById("key_and_con").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

//nested function practice
function counter() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var start = 6;
        function add_one() {
            start += 1;
        }
        add_one();
        return start;
    }
}
