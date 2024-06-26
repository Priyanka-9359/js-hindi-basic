const accountId = 144553
let accountEmail = "choratpriyanka@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

//account = 2 not allowed

accountEmail = "ashu@gmail.com"
accountPassword = "21212121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope ({})

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])