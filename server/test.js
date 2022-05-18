
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");

const data = [{"date":"3/2/2022 10:11","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Brownie","value":"50","transactionType":"Expense","currency":"USD"},{"date":"3/2/2022 10:11","account":"CUB - online payment","category":"Other","subCategory":"","notes":"To lended people","value":"300","transactionType":"Expense","currency":"USD"},{"date":"3/1/2022 19:50","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Dinner","value":"78","transactionType":"Expense","currency":"USD"},{"date":"3/1/2022 18:56","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Metro","value":"30","transactionType":"Expense","currency":"USD"},{"date":"3/1/2022 18:22","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Snacks","value":"67","transactionType":"Expense","currency":"USD"},{"date":"3/1/2022 18:22","account":"CUB - online payment","category":"Other","subCategory":"","notes":"From vicky","value":"100","transactionType":"Income","currency":"USD"},{"date":"3/1/2022 18:21","account":"CUB - online payment","category":"Other","subCategory":"","notes":"From dad","value":"500","transactionType":"Income","currency":"USD"},{"date":"2/28/2022 11:56","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Pizza","value":"339.15","transactionType":"Expense","currency":"USD"},{"date":"2/28/2022 11:45","account":"CUB - online payment","category":"Other","subCategory":"","notes":"From kumara","value":"200","transactionType":"Income","currency":"USD"},{"date":"2/27/2022 15:29","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Lunch","value":"243","transactionType":"Expense","currency":"USD"},{"date":"2/26/2022 20:16","account":"CUB - online payment","category":"Food","subCategory":"","notes":"","value":"25","transactionType":"Expense","currency":"USD"},{"date":"2/26/2022 17:37","account":"CUB - online payment","category":"Other","subCategory":"","notes":"From dad","value":"1500","transactionType":"Income","currency":"USD"},{"date":"2/26/2022 17:37","account":"CUB - online payment","category":"Other","subCategory":"","notes":"To karthi","value":"100","transactionType":"Expense","currency":"USD"},{"date":"2/26/2022 16:01","account":"CUB - online payment","category":"Social Life","subCategory":"","notes":"","value":"1700","transactionType":"Expense","currency":"USD"},{"date":"2/26/2022 14:07","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Snacks","value":"40","transactionType":"Expense","currency":"USD"},{"date":"2/26/2022 1:39","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Tea lights","value":"84","transactionType":"Expense","currency":"USD"},{"date":"2/25/2022 12:08","account":"CUB - online payment","category":"Food","subCategory":"","notes":"","value":"33","transactionType":"Expense","currency":"USD"},{"date":"2/24/2022 22:32","account":"CUB - online payment","category":"Household","subCategory":"","notes":"","value":"303","transactionType":"Expense","currency":"USD"},{"date":"2/24/2022 22:21","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Creamstone","value":"289","transactionType":"Expense","currency":"USD"},{"date":"2/24/2022 19:15","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Tamen","value":"324.7","transactionType":"Expense","currency":"USD"},{"date":"2/23/2022 17:35","account":"CUB - online payment","category":"Apparel","subCategory":"","notes":"Hoodie for gobi","value":"399","transactionType":"Expense","currency":"USD"},{"date":"2/23/2022 16:06","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Eggs","value":"83","transactionType":"Expense","currency":"USD"},{"date":"2/23/2022 12:38","account":"CUB - online payment","category":"Apparel","subCategory":"","notes":"Earphone","value":"399","transactionType":"Expense","currency":"USD"},{"date":"2/22/2022 6:33","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Auto to laxmi mills","value":"120","transactionType":"Expense","currency":"USD"},{"date":"2/21/2022 22:15","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"It better be worth it","value":"1300","transactionType":"Expense","currency":"USD"},{"date":"2/21/2022 16:06","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Travel to koyambedu","value":"138","transactionType":"Expense","currency":"USD"},{"date":"2/21/2022 15:40","account":"CUB - online payment","category":"Household","subCategory":"","notes":"Stuffs","value":"336","transactionType":"Expense","currency":"USD"},{"date":"2/21/2022 15:38","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Train cbe to chn","value":"201.8","transactionType":"Expense","currency":"USD"},{"date":"2/20/2022 15:24","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Lunch","value":"200","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 23:03","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Random stuff for drinks","value":"111","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 21:57","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Snacks","value":"250","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 21:35","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Bus ticket","value":"1575","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 20:45","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Took from sbi","value":"200","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 20:45","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Ramen with gobi","value":"380","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 8:26","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"Metro","value":"60","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 6:27","account":"CUB - online payment","category":"Other","subCategory":"","notes":"To auto anna","value":"50","transactionType":"Expense","currency":"USD"},{"date":"2/19/2022 6:18","account":"CUB - online payment","category":"Transportation","subCategory":"","notes":"To egmore","value":"270","transactionType":"Expense","currency":"USD"},{"date":"2/18/2022 23:01","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Kfc dinner","value":"348","transactionType":"Expense","currency":"USD"},{"date":"2/17/2022 13:11","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Lunch","value":"80","transactionType":"Expense","currency":"USD"},{"date":"2/16/2022 16:57","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Side dishes","value":"165","transactionType":"Expense","currency":"USD"},{"date":"2/16/2022 16:57","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Kfc ","value":"475","transactionType":"Expense","currency":"USD"},{"date":"2/13/2022 21:54","account":"CUB - online payment","category":"Social Life","subCategory":"","notes":"Games ","value":"100","transactionType":"Expense","currency":"USD"},{"date":"2/12/2022 21:20","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Dinner with aravind and buddies","value":"491","transactionType":"Expense","currency":"USD"},{"date":"2/12/2022 16:04","account":"CUB - online payment","category":"Household","subCategory":"","notes":"Mirror","value":"70","transactionType":"Expense","currency":"USD"},{"date":"2/12/2022 14:48","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Lunch","value":"80","transactionType":"Expense","currency":"USD"},{"date":"2/12/2022 14:47","account":"CUB - online payment","category":"Other","subCategory":"","notes":"From dad","value":"10000","transactionType":"Income","currency":"USD"},{"date":"2/11/2022 22:41","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Dinner with aravind","value":"373","transactionType":"Expense","currency":"USD"},{"date":"2/10/2022 20:15","account":"CUB - online payment","category":"Food","subCategory":"","notes":"Kfc dinner","value":"641","transactionType":"Expense","currency":"USD"},{"date":"2/8/2022 10:37","account":"CUB - online payment","category":"Other","subCategory":"","notes":"From dad","value":"1000","transactionType":"Income","currency":"USD"},{"date":"2/8/2022 9:18","account":"CUB - online payment","category":"Household","subCategory":"","notes":"Bean bag","value":"2099","transactionType":"Expense","currency":"USD"}]
dbo.connectToServer(function (err) {
  if (err) console.error(err);
  let db_connect = dbo.getDb();
  db_connect.collection("transactions").insertMany(data, function (err, res) {
    if (err) throw err;
  });
});


/*
user:
- id
- userName
- Password
- Email
- FName
- LName

Accounts:
- id
- startingBalance
- AccountType : [Checking, Savings, Loan, Credit Card]
- NickName
- userId

{
"startingBalance":100,
"accountType":"",
"nickName": "My Checking",
"userId":"",
}

Transactions:
- id
- transaction type [expense | income]
- date
- value
- notes
- category
- accountId

Transaction Type:
- id
- name

Transaction Category
- id
- Label


*/