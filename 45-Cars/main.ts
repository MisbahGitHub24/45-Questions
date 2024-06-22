interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...options: any[]
): Car {
  const car: Car = { manufacturer, model };
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
