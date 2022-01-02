// Importing relevant dependencies
const express = require("express");



// Creation of express application
const app = express() // Creating an instance of the express application


// View Engine
// Usage of EJS
// register view engine
app.set('view engine','ejs');
// express and ejs will look in the views folder, this is the default, tentatively we can set our own folder where we will keep our view.
