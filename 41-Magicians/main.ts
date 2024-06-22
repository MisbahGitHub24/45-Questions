function showMagicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Array of magicians' names
let magicians: string[] = [
  "David Copperfield",
  "Penn Jillette",
  "Teller",
  "Derren Brown",
  "Criss Angel",
];

showMagicians(magicians);
