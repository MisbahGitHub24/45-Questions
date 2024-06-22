"use strict";
let guestsList = ["Fatima", "Zainab", "Mehar", "Areeba", "Meraj"];
guestsList.splice(2, 1, "Sana");
guestsList.push("Rida");
guestsList.unshift("Hira");
guestsList.splice(2, 0, "Romaisa");
guestsList.forEach((guest) => {
    console.log(`${guest}, I have organized a bigger dinner, I want my friends to join me in my happiness.`);
});
