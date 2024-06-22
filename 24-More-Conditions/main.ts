let countryName:string = "PAKISTAN"

// TEST 1 //
console.log("TEST 1");
console.log(" Tests for equality and inequality with strings");
console.log(countryName == "pakistan"); //false
console.log(countryName == "PAKISTAN"); //true
 
// TEST 2 // 
console.log("TEST 2");
console.log("Tests using the lower case function");
console.log(countryName.toLowerCase() == "pakistan"); //false
console.log(countryName.toUpperCase() == "PAKISTAN"); //true

// TEST 3 //
console.log("TEST 3");
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(countryName.length > 8); //false
console.log(countryName.length < 9); //true
console.log(countryName.length >= 10); //false
console.log(countryName.length <= 8); //true


// TEST 4 // 
console.log("TEST 4");
console.log('Tests using "and" and "or" operators');
console.log(countryName.length > 7 && countryName == "pakistan"); //false
console.log(countryName.length >= 8 || countryName == "pakistan"); //true

// TEST 5 // 
console.log("TEST 5");
console.log("Test whether an item is in a array");
console.log(countryName[0] == "p"); //false
console.log(countryName[1] == "A"); //true

// TEST 6 // 
console.log("TEST 6");
console.log("Test whether an item is not in a array");
console.log(countryName[1] !== "A"); //false
console.log(countryName[0] !== "p"); //true