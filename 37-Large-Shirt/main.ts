function make_shirt(
  size: string = "large",
  message: string = "Cool Shirts Available!!] "
): void {
  console.log(`Shirt size: ${size.toUpperCase()}, Message: "${message}"`);
}

make_shirt();

make_shirt("medium");

make_shirt("small", "Beautifull Shirts Available!!");
