const accountID = 144553
let AccountEmail = "abhinavrusia@gmail.com"
var AccountPassword = "12345"
AccountCity = "Indore" // not a good way to store value.
let Accountstate

// accountID = 2 not allowed cannot change const value.

AccountEmail ="abhir09@gmail.com"
AccountPassword ="1225154"
AccountCity = "harpalpur"

console.log(accountID);

/*
Prefer not to use var
because of issue in  block scope and functional scope.
*/


console.table([accountID,AccountEmail,AccountPassword,AccountCity,Accountstate])
