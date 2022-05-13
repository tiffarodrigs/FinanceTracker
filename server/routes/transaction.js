const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/transactions").get(function (req, res) {
  let db_connect = dbo.getDb("FinanceTracker");
  db_connect
    .collection("Transactions")
    .find({})
    .sort({"date": -1})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/transactions/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Transactions")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// 
recordRoutes.route("/transaction/categories").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
      .collection("TransactionCategory")
      .find({}).toArray( function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/transactions/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {...req.body, date: new Date(req.body.date)};
  db_connect.collection("Transactions").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/transactions/:id").put(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      name: req.body.name,     
      position: req.body.position,      
      level: req.body.level,    
    }
  }
});

// This section will help you delete a record
recordRoutes.route("/transactions/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("Transactions").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;