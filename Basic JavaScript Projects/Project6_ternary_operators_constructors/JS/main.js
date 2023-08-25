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