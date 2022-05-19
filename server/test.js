
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");

const data = [{label:'grocery'}, {label:'kids'}, {label:'transport'},{label: 'entertainment'},{label:'personl care'}, {label:'utilities'}]
dbo.connectToServer(function (err) {
  if (err) console.error(err);
  let db_connect = dbo.getDb('FinanceTracker');
  db_connect.collection("TransactionCategory").insertMany(data, function (err, res) {
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