//create a new router 
const express = require("express");
const router = express.Router();

//define our data
var shopData = {shopName: "Pour up (drank)",
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shops: [
                    {
                        location: "New York",
                        managerName: "Alan Wake",
                        address: "123 Street, New York, NY"
                    },
                    {
                        location: "London",
                        managerName: "Lara Croft",
                        address: "321 Avenue, London, UK"
                    },
                    {
                        location: "Ann Arbor",
                        managerName: "Nathan Drake",
                        address: "420 Detroit Street, Ann Arbor, MI"
                    }
                    ]
                };

//Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
});

router.get("/about", (req,res) => {
    res.render("about.ejs", shopData)
});

router.get("/search", (req,res) => {
    res.render("search.ejs", shopData)
});

router.get('/search_result', function (req,res) {
    //TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req,res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req,res) => {
    res.send(' Hello ' + req.body.first + ' ' + req.body.last +
             ' you are now registered! We will send an email to you at ' +
             req.body.email);
});

router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData)
})

router.post("/survey", (req,res) => {
    const responses = {
        first_name: req.body.first_name,
        surname: req.body.surname,
        email: req.body.email,
        category: req.body.category,
        age: req.body.age,
        student: req.body.student ? "Yes" : "No"
    };
    res.render("survey_result.ejs", {responses});
});

//Export the router object so index.js can access it
module.exports = router;