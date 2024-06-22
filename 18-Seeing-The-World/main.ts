let placesToVisit: string[] = ["Switzerland", "Australia", "Turkey", "Germany", "Mexico"];

console.log("Original Order:", placesToVisit);

console.log("Alphabetical Order:", placesToVisit.sort());

console.log("Still in Original Order:", placesToVisit);

console.log("Reverse Alphabetical Order:", placesToVisit.sort().reverse());

console.log("Still in Original Order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
