var names = ["Ash", "Dawn", "Brock", "Jessie", "James", "Meowth", "Cynthia", "Paul", "Gary"];
var descreptions = ["Ash is a challenging trainer and one day he will become a pokemon master",
"Dawn a cute and beautiful girl doing pokemon contests to become a top coordinater like her mother",
"Brock always falls in love with some girls but is a pokemon breeder",
"Jessie is a part of team Rocket the pokemon stealers and trouble makers and is planning to give Ash's pikachu to team Rocket's boss",
"James is even a part of Team Rocket and works with Jessie in her missions",
"Meowth many cat pokemons are Meowth but this one is special it can talk and also it is in Team Rocket with Jessie and James and Meowth creates amazing machines",
"Cynthia is a pokemon trainer and is trying to catch Palkia and Dialga but her main fight is Arceus the legendary pokemon",
"Paul a great opponent of Ash who is very strong and defeated Ash 2 times and in the third time Ash won! Paul's face is always frowned",
"Gary is a rival of Ash who wants to become a pokemon master before Ash becomes and he has many girlfans but later had less and was going down"];
var images = ["ash.png", "dawn.png", "brock.png", "jessie.png", "james.png", "meowth.png", "cynthia.png", "paul.png", "gary.png"];
var i = 0;
function update() 
{
    i++;
    var no_of_names = 9;
    if(i == no_of_names)
    {
        i = 0;
    }
    var setImage = images[i];
    var setName = names[i];
    var discribe = descreptions[i];
    document.getElementById("characters").src = setImage;
    document.getElementById("name").innerHTML = setName;
    document.getElementById("descreption").innerHTML = discribe;
}