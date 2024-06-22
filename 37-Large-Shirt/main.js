"use strict";
function make_shirt(size = "large", message = "Cool Shirts Available!!] ") {
    console.log(`Shirt size: ${size.toUpperCase()}, Message: "${message}"`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Beautifull Shirts Available!!");
