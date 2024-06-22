function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push("Great " + magician);
  }
  return greatMagicians;
}

function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const magicians: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];

const originalMagicians: string[] = [...magicians];

const greatMagicians: string[] = makeGreat(originalMagicians);

console.log("Original magicians:");
showMagicians(originalMagicians);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);
