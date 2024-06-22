"use strict";
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach((option, index) => {
        if (index % 2 === 0 && options[index + 1] !== undefined) {
            car[option] = options[index + 1];
        }
    });
    return car;
}
// Call the function with required and additional information
const myCar = createCar("Toyota", "Camry", "color", "black", "year", 2022);
// Print the object to check if all information was stored correctly
console.log(myCar);
