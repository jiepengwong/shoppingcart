const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Constructor function
// We need to FIRST create SCHEMA, THEN MODEL
// === Creation of Schema ===

// This is like the template for each listing
const blogSchema = new Schema({
        // Put an object here so we can have more properties like required and stuff
        title: {type: String, required: true},
        snippet: {
            type: String,
            required: true
        },
        body: {
            type:String,
            required: true
        }
    }, {timestamps:true})

// === Creation of Model ===
// This would refer to an instance of the blog 
const Blog = mongoose.model('Blog',blogSchema);

// We will call the shop as a class
module.exports = Blog;