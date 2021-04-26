// Make a list of words for each variable:

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["catly", "different", "possible"];

// Pick a random element from each array:
// https://css-tricks.com/snippets/javascript/select-random-item-array/

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

console.log(
  'My + ${noun} leaps + ${adjective} when I + ${verb} a rainbow in the sky'
);

console.log(adjective);
console.log(noun);
console.log(verb);