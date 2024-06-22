let currentUsers: string[] = ["Misbah","Fatima","Zainab","Dua","Alina"]

let newUsers: string[] = ["Asad","Meraj","Mehar","Ali","Iqra"]

let lowercasedCurrentUsers = currentUsers.map(user => user.toLowerCase());

for (let userName of newUsers) {
    if (lowercasedCurrentUsers.includes(userName.toLowerCase())) {
        console.log(`The username "${userName}" is already taken. Please enter a new username.`);
    }else{
        console.log(`The username "${userName}" is available.`);
    }
}
