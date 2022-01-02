// Importing relevant dependencies
const express = require("express");
const mongoose = require('mongoose');


// === Connection to relevant database === 
const dbURI = "mongodb+srv://jiepeng:jiepeng@nodejstutoriallearning.xssjk.mongodb.net/paymentproject?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then((result)=> {
    // console.log("connected to db") 
    // app will only listen when connection is being established already
    app.listen(3000)
    console.log("Connection is established to the DB")
})
.catch((error) => console.log("error"));

// Creation of express application
const app = express() // Creating an instance of the express application


// === View Engine ===
// Usage of EJS
// register view engine
app.set('view engine','ejs');
// express and ejs will look in the views folder, this is the default, tentatively we can set our own folder where we will keep our view.


// === Public Folder ===
// Name inside params can be anything.
// Anything put inside this folder will be public and can be accessed by the user
app.use(express.static('public'))
// If we put styles.css inisde public folder, link tag should work to reference to the style.css file

// Data parser, takes URL encoded data converts into an  object (Takes data from form object)
app.use(express.urlencoded({extended: true}))



// === Routes ===

// Default route
app.get("/",(req,res)=>{
    res.send("hi");

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
