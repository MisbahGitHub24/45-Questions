"use strict";
let guestsList = ["Fatima", "Zainab", "Amna", "Iqra", "Mehar"];
guestsList.splice(2, 1, "Sawera");
guestsList.push("Sara");
guestsList.unshift("Aiman");
guestsList.splice(2, 0, "Ambreen");
let numGuests = guestsList.length;
guestsList.forEach(guest => {
    console.log(`${guest}, I am inviting ${numGuests} people to dinner.`);
});
