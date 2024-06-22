"use strict";
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push("Great " + magician);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians = [
    "Harry Houdini",
    "David Blaine",
    "Penn Jillette",
    "Teller",
];
const originalMagicians = [...magicians];
const greatMagicians = makeGreat(originalMagicians);
console.log("Original magicians:");
showMagicians(originalMagicians);
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
