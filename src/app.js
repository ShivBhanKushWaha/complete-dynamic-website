const express = require("express");
const hbs = require("hbs");
const { use } = require("./routes/main");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/main");
const Detail = require("./models/detail");
const Slider = require("./models/Slider");
const Service = require("./models/service");
const Gallery = require("./models/gallery");
const gallery = require("./models/gallery");

const port = process.env.PORT || 8000;

// to set public folder file
// if we use static like public/css/style.css
app.use(express.static("public"));

// data send in url if we send data in json formate then use .jason
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('',routes);

// template engines
app.set('view engine','hbs');
app.set("views","views");

//to set partials
hbs.registerPartials("views/partials");

// to connect the db using monggose
mongoose.connect("mongodb://localhost/fullStackProject",() => {
    console.log("database successfully connected")

    // gallery data
    // gallery.create([
    //     {
    //         title:'DSA Series by Love Babbar',
    //         type:'Data structure',
    //         Language:'C++',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    //         priority:1
    //     },
    //     {
    //         title:'HTML && CSS',
    //         type:'Frontend',
    //         Language:'HTML && CSS ',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLXQpH_kZIxTW3FzsfVQmFuZEYagO8LfyB",
    //         priority:2
    //     },
    //     {
    //         title:'Port folio project',
    //         type:'Learning',
    //         Language:'HTML && CSS',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLXQpH_kZIxTWgPEnocGfpQo4XLrgcx63M",
    //         priority:3
    //     },
    //     {
    //         title:'JavaScript',
    //         type:'Frontend',
    //         Language:'Js',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLXQpH_kZIxTV7slsiwQarBEVXHgQWDhLQ",
    //         priority:4
    //     },
    //     {
    //         title:'JavaScript Project',
    //         type:'Fronted',
    //         Language:'Js',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3",
    //         priority:5
    //     },
    //     {
    //         title:'JavaScript API Project',
    //         type:'Fronted',
    //         Language:'Js',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLNCevxogE3fiLT6bEObGeVfHVLnttptKv",
    //         priority:7
    //     },
    //     {
    //         title:'Responsive Project',
    //         type:'Fronted',
    //         Language:'HTML && CSS && JS',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLNCevxogE3fj8Q2dvuS4aHNR6BHnneQ80",
    //         priority:6
    //     },
    //     {
    //         title:'React Frame',
    //         type:'frame Work',
    //         Language:'HTML,CSS && JS',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
    //         priority:8
    //     },
    //     {
    //         title:'Node js Tutorials',
    //         type:'Backend && DataBase',
    //         Language:'NodeJs,Express,Mongoose && mongodb',
    //         link:"https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8",
    //         priority:9
    //     },
    // ])


    //Services data
    // Service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'We provide best Courses thet helps us students in placement and learnig coding skills in very easy and simple way ',
    //         link:'/gallery',
    //         linkText:'Check'
    //     },
    //     {
    //         icon:'fa-solid fa-shop-lock',
    //         title:'Security tips',
    //         description:`Always close and lock garage doors and windows.
    // Be alert for unusual activities have someone empty it for you.`,
    //         link:'https://safety.google/security/security-tips/',
    //         linkText:'Check'
    //     },
    //     {
    //         icon:'fa-solid fa-users-viewfinder',
    //         title:'User friendly',
    //         description:`Choose a Website Design That Puts the User First
    //             Use Accessible Language and Tone. 
    //             Choose Color Carefully.
    //             Keep It Simple.`,
    //         link:'https://rockcontent.com/blog/user-friendly-website/',
    //         linkText:'Visit'
    //     },
    // ])

    // slider data
    // Slider.create([
    //     {
    //         title:'Learn C++ By Love Babbar',
    //         subTitle:'C++ is very popular language For problem solving',
    //         imageUrl:"/images/c++.png"
    //     },
    //     {
    //         title:'Learn MongoDb',
    //         subTitle:'MongoDb is Very popular database language this time',
    //         imageUrl:"/images/mongodb.png"
    //     },
    //     {
    //         title:'Complete full stack Web develop ment road map',
    //         subTitle:'Learn by many plateform visit gallery section ',
    //         imageUrl:"/images/all.png",
    //         class:'active',
    //     },
    // ]);

    // Detail.create({
    //     brandName:"Info Tech Solution",
    //     brandIconUrl:"https://s.tmimgcdn.com/scr/1200x750/186900/modern-web-logo-design-template_186934-original.jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/",
    //         },
    //         {
    //             label:"Services",
    //             url:"/#services_section"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/#about",
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/#contact_us_section"
    //         },
    //     ],
    // });
})



app.listen(port,() => {
    console.log(`server start at port number ${port} `);
})