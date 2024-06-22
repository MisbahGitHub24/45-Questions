let guestsList: string[] = ["Fatima", "Zainab", "Mehar", "Asad", "Meraj"];

let notPresenceguestName = guestsList.splice(2, 1, "Ali");

console.log(`${notPresenceguestName}, is not attand this dinnar`);

guestsList.forEach((ele) => {
  console.log(
    `Dear Friend; ${ele}, I have arranged a dinner invitation at my home, and it would bring me great pleasure if you could honor us with your presence.`
  );
});
