var age = 8
var height = 5

//if person less than 8 console.log (check out the merry go round)

//Class Exercise #1
if (age < 8){
    console.log("Check out the merry go round")
} else if (age > 8 && age < 65 && height > 4.5){
    console.log("Check out the roller coaster")
} else {
    console.log("Check out the lazy river")
}

//Class Exercise #2 
let noun = ['cat','hipster','doggo','bird','skunk'];
let verb = ['leaps','jumps','smells','runs','rains'];
let adjective = ['happily','catly','dogly','lovely','vintage'];

//concatenation
var sentence = "My " + "  " + noun +"   "+ verb + "  " + adjective + " when I leap a rainbow in the sky";

let randomNoun = noun[(Math.random()*noun.length)];
let randomAdj = adjective[(Math.random()*adjective.length)];
let randomVerb = verb[(Math.random()*verb.length)];

var sentence = 'My $[randomNoun] $[randomVerb] $[randomAdj] when I leap a rainbow in the sky';
console.log(sentence)

