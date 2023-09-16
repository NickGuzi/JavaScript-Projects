//Creating a Dictionary(Object)
function dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Cairn Terrier",
        Age: 12,
        Sound: "Woof!"
    };
    delete Animal.Age; //Delete operator
    document.getElementById("Dict").innerHTML = Animal.Age;
}
