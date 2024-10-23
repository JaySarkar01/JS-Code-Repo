const accountId = 11225533;
let accountName ='Jay2003';
var emailId = 'jaisarkar@gmail.com';
password = 'de#r332*#';

let TokenNo;

console.table([accountId, accountName, emailId, password, TokenNo]);
// accountId = 43142321; // not allowed...😗
accountName = 'jai@2003';
emailId = 'jay@gmail.com';
password = 'lolu#4rd';
console.log("After change the values...\n");

/*
    NOTE : Not use var key word,
    because it issue with block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountName, emailId, password, TokenNo]);