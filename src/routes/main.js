const express = require("express");
const routes = express.Router();

const Detail = require("../models/detail");
const Slider = require("../models/Slider");
const Service = require("../models/service");
const contact = require("../models/contact");
const Gallery = require("../models/gallery");



routes.get("/",async (req,res) => {
    const details = await Detail.findById({"_id":"638c89c9ecd1333e8cbaff41"});
    const slides = await Slider.find();
    const services = await Service.find();
    const galleries = await Gallery.find().sort({"priority":1});
    res.render("index",{
        details:details,
        slides:slides,
        services:services,
        galleries:galleries,
    });
});

routes.get("/gallery",async (req,res) => {
    const details = await Detail.findById({"_id":"638c89c9ecd1333e8cbaff41"});
    const services = await Service.find();
    const slides = await Slider.find();
    const galleries = await Gallery.find().sort({"priority":1});
    res.render("gallery",{
        details:details,
        services:services,
        slides:slides,
        galleries:galleries,
    });
});

// process contact form
routes.post("/process-contact-form",async (req,res) => {
    console.log("this form is submited successfyully");
    console.log(req.body)
    // to save data in database
    try{
        const data = await contact.create(req.body);
        console.log(data);
        res.redirect("/");
    }
    catch(e){
        console.log(e);
        res.redirect("/");
    }
})

module.exports = routes;