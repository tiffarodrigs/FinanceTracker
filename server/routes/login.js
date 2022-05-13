const express = require("express");
const loginRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;


loginRoutes.route("/login").get(function (req, res) {
  let db_connect = dbo.getDb("FinanceTracker");
  db_connect
    .collection("UserInfo")
    .find({userName: req.query.userName, password: req.query.password})
    .toArray(function (err, result) {
      console.log(result.length);
      if (err) throw err;
      if(result.length === 1)
        res.json('ok');
        if(result.length === 0)
        {
          res.json({error: 'Invalid error'});}
    });
});
loginRoutes.route("/register").post(function(req,response){
  let db_connect = dbo.getDb("FinanceTracker");
  let myobj = {...req.body,createdDate: new Date()};
  db_connect.collection("Transaction"),insertOne(myobj,function(err,res){
    if(err) throw err;
    response.json('ok');

  });
});




module.exports = loginRoutes;