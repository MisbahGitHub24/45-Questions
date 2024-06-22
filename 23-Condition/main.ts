let myName:string = "Misbah"

// TEST 1 //
console.log(myName == "misbah"); //false

// TEST 2 //
console.log(myName !== "Misbah"); //false

// TEST 3 //
console.log(myName.charAt(1) == "M"); //false

// TEST 4 //
console.log(myName.startsWith("m")); //false

// TEST 5 //
console.log(myName.includes("S")); //false

// TEST 6 //
console.log(myName.length == 6); //true 

// TEST 7 //
console.log(myName.endsWith("h")); //true

// TEST 8 //
console.log(myName == "Misbah"); //true

// TEST 9 //
console.log(!(myName == "misbah")); //true

// TEST 10 //
console.log(myName.charAt(3) == "b"); //true
