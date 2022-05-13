const { response } = require("express");
const express = require("express");
const accountRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


accountRoutes.route("/users/:userId/accounts").get(function (req, res) {
  let db_connect = dbo.getDb("FinanceTracker");
  db_connect
    .collection("Account")
    .find({userId: ObjectId(req.params.userId)})
    .sort({"date": -1})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
//to create new account 
accountRoutes.route("/users/:userId/accounts/create").post(function(req,response){
  let db_connect = dbo.getDb("FinanceTracker");
  db_connect.collection("Account").insertOne({label:req.body.accountType},function(err,res){
    if(err) throw err;
    response.json(res);
  })

});

//to get the account types
accountRoutes.route("/accounts/types").get(function(req,res){
  let db_connect = dbo.getDb("FinanceTracker");
  db_connect.collection("AccountType").find().toArray(function (err,result){
    if (err) throw err;
    res.json(result);
  })
  
});
//create account types
accountRoutes.route("/accounts/types/create").post(function(req,res){
  let db_connect =dbo.getDb("FinanceTracker");
  db_connect.collection("Account").insertOne(req.body,function(err,res){
    if(err) throw err;
    response.json(res);
  })
});




module.exports = accountRoutes;