"use strict";
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}
let magicians = [
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "Derren Brown",
    "Criss Angel",
];
makeGreat(magicians);
showMagicians(magicians);
