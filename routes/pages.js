const express = require("express");
const router = express.Router();

// Purpose of having a router is to make the code more modular, more readable in a sense

// MVC approach, Model View and Controller

// Model establishes type of data structure needed to store into the db
// Controllers establishes the link between the model and the view
// View displays the pages



// Default route
router.get("/",(req,res)=>{
    res.render("index",{
        title: "Shopping List"
    });



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
router.get("/listings",(req,res) =>{

})


// Creations of shopping items route 







// exporting the router to use in app.js
module.exports = router;