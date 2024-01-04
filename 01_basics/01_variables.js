// ASCII text generator
// https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
// https://fsymbols.com/generators/zalgo/

console.log(`
___  ___________ ______
/ _ \\/  _/ __/ _ /_  __/
/ , _// // _// __ |/ /   
/_/|_/___/_/ /_/ |_/_/    
`);

const accountId = 215
let accountEmail = "rifat@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rifat@outlook.com"
accountPassword = "654321"
accountCity = "Narayanganj"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])