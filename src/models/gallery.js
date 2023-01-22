const mongoose = require("mongoose");

const Gallery = mongoose.Schema({
    title:String,
    type:String,
    Language:String,
    link:String,
    priority:Number
})
module.exports = mongoose.model("gallery",Gallery);