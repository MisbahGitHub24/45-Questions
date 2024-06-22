function showMagicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians: string[]): string[] {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
  return magicians;
}

let magicians: string[] = [
  "David Copperfield",
  "Penn Jillette",
  "Teller",
  "Derren Brown",
  "Criss Angel",
];

makeGreat(magicians);

showMagicians(magicians);
