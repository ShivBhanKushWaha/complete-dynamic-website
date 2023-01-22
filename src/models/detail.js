const mongoose = require("mongoose");

// to define schema 
const Detail = mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
            {
             label:String,
             url:String,
            },
        ],
});

// export the module
module.exports = mongoose.model("detail",Detail);