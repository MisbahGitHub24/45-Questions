function orderSandwich(...items: string[]): void {
  console.log("Sandwich order summary:");
  if (items.length === 0) {
    console.log("No items specified for the sandwich.");
  } else {
    console.log("Items on the sandwich:");
    for (const item of items) {
      console.log("- " + item);
    }
  }
  console.log("---------------------------");
}

orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Onion");
