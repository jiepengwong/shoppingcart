const express = require("express");
const router = express.Router();
const Item = require('../models/listings');

// Purpose of having a router is to make the code more modular, more readable in a sense

// MVC approach, Model View and Controller

// Model establishes type of data structure needed to store into the db
// Controllers establishes the link between the model and the view
// View displays the pages



// Default route
router.get("/",(req,res)=>{
   
    // Item Model, find all documents in shops collections
    Item.find()
    .then((response)=>{
        res.render("index",{title:"Item Listings", items: response})

    })
    .catch((error)=>{

    })



    // res.redirect('blogs')
    // const blogs = [
    //     // {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     // {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     // {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // // == Render view ==
    // res.render('index',{title: 'Home',blogs})

    // Similarly to vuejs, we can pass parameters to the ejs template. 
    // similar parameter names can be used, and it is specific to each URL.

    
    // res.send
    //   res.setHeader("Content-Type", "text/html")
    // We don't have to do the typical 3 steps we have been  doing all along
    // express will automatically detect the type. 
    // res.send('<p>Home page</p>');

    // res.sendFile('./views/index.html',{root: __dirname}) // In order to use relative URLs, root has to be specified.

    // This is rather similar to what we have been doing. Importing the fs module and then reading the file
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
        // Redirect it to the home page which is the all listings page 
        res.redirect("/");

    })
    .catch((error)=>{
        console.log(error);
    })
})





// exporting the router to use in app.js
module.exports = router;