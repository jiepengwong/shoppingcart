const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Constructor function
// We need to FIRST create SCHEMA, THEN MODEL
// === Creation of Schema ===

// This is like the template for each listing
const listSchema = new Schema({
        // Put an object here so we can have more properties like required and stuff
        item: {type: String, required: true},
        description: {
            type: String,
            required: true
        },
        price: {
            type:Number,
            required: true
        }
    }, {timestamps:true})

// === Creation of Model ===
// This would refer to an instance of the blog 
const Item = mongoose.model('Blog',listSchema);

// We will call the shop as a class
module.exports = Item;