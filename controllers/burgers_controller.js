const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    burger.all function(data) {
        const hbsObject = {
            burgers: data
        }
           res.render("index", hbsObject);
    }
})

router.post("/api/burgers", function(req, res) {
    burger.create("burger_name", req.body.devoured, (result)=>{
    console.log(result);
        // Send back the ID of the new quote
    res.json({ id: result.insertId })
  });
});

router.put("/api/burgers/:id", function(req, res) {
    let bugerID = req.params.id 
    let finish = req.body.finish
    burger.update('finish', finish, id, (result)=> {
        if (result.changeRows === 0) {
            return res.status(404).end()
        } else {
            return res.status(200).end()
        }
    })
 })

 router.delete("/api/orders/:id", (req, res) =>{
    let id = req.params.id
    burger.delete(id, (result)=>{
        if (result.affectedRows === 0) {
            return res.status(404).end()
    } else {
      res.status(200).end();

    }
 })
 })

// Export routes for server.js to use.
module.exports = router;
