const  accountId = [9,8,9,8,7]
// const accountId = [9,2,4,6,3]
let accountEmail = "shubham@gmail.com"
var accountPassword = "1234"
accountCity = "prayagraj"
let accountState;

// accountId = 2  // Not Allowed 

accountId[5] = 4
accountCity = "jaunpur"
accountEmail = "sam@gmail.com"
accountPassword = "1234"
accountState = "uttar pradesh"
console.log(accountId);
console.table([accountCity , accountEmail , accountPassword , accountState]);

/* 

prefer not to use [*var]
because of issue in block scope and functional scope


*/