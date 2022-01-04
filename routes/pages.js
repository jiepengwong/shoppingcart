require("dotenv").config()
const express = require("express");
const router = express.Router();
const Item = require('../models/listings');
const bodyParser = require('body-parser')


const Stripe = require('stripe');
const stripe = Stripe('sk_test_51K5LIQJ2poMPNLhqOW4C1XifJeJlSbYgEWjiwaVIIRY6TZToZmSY7m2oN7n8Bx9AgT82MVlhv44ZfriRMF7fga1z00feB557vi');

// Purpose of having a router is to make the code more modular, more readable in a sense

// MVC approach, Model View and Controller

// Model establishes type of data structure needed to store into the db
// Controllers establishes the link between the model and the view
// View displays the pages

// Stripe system setup

var jsonParser = bodyParser.json()

// Default route
router.get("/",(req,res)=>{
   
    // Item Model, find all documents in shops collections
    Item.find()
    .then((response)=>{
        res.render("index",{title:"Item Listings", items: response})

    })
    .catch((error)=>{

    })
})



// Listings route
router.get("/create",(req,res) =>{
    res.render("create",{title:"List your item"})
})


// Owned items
router.get("/own",(req,res) =>{
    res.render("own",{title:"Item collection"})
})

// Posting request
router.post("/",(req,res)=>{
    // Since we are posting the data into the database, we have to create a new instance of it 
    const item = new Item(req.body)
    console.log(item);
    console.log(console.log(req.body));

    // Saving it to the Database 

    // Async request 
    item.save()
    .then((response)=>{
        // Redirect it to the home page which is the all listings page after submission
        res.redirect("/");

    })
    .catch((error)=>{
        console.log(error);
    })
})


router.post("/create-checkout-session",jsonParser, async(req,res)=>{
    console.log(req.body.items[0].price)
   
    try{

        console.log("help")
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
            line_items:  [{
                price_data: {
                    currency: "usd",
                    product_data: {
                    name: req.body.items[0].item

                    },
                    unit_amount: req.body.items[0].price *1000  ,
                },
                quantity: 1
            }],
            success_url: `${process.env.SERVER_URL}/`,
            cancel_url: `${process.env.SERVER_URL}/create`


        })
        res.json({ url: session.url })
        
    }
    catch(e){
        console.log(e);
    }
})

router.get("/details/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id)
    Item.findById(id)
    .then((response)=>{
        res.render("details",{item:response, title: "Item Details"})
    })
    .catch((error)=>{
        console.log(error.message)
    })
})
// exporting the router to use in app.js
module.exports = router;