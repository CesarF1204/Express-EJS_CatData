let express = require("express");
let app = express();
//static html
app.use(express.static(__dirname + "/static"));
//css
app.use(express.static(__dirname + "/css"));
//images
app.use(express.static(__dirname + "/images"));
// ejs
app.set('view engine', 'ejs');

//routes
app.get("/cats", function (request, response){
    response.render('cats');
});
//display cats
app.get("/cuddles", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Cuddles", food: 'Spaghetti', age: 4, sleeping_spots: ['kitchen', 'sofa', 'bed'], image: 'cats-1.png'},
    ];
    response.render('details', {cats: cat_details});
});
app.get("/hug", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Hug", food: 'Apple', age: 4, sleeping_spots: ['bed', 'table', 'kitchen'], image: 'cats-2.png'},
    ];
    response.render('details', {cats: cat_details});
});
app.get("/cookie", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Cookie", food: 'Hotdog', age: 4, sleeping_spots: ['chair', 'sofa', 'bed'], image: 'cats-3.png'},
    ];
    response.render('details', {cats: cat_details});
});
app.get("/brownie", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Brownie", food: 'Ham', age: 8, sleeping_spots: ['toilet', 'kitchen', 'bed'], image: 'cats-4.png'}, 
    ];
    response.render('details', {cats: cat_details});
});
app.get("/yippie", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Yippie", food: 'Meatloaf', age: 3, sleeping_spots: ['kitchen', 'chair', 'table'], image: 'cats-5.png'}, 
    ];
    response.render('details', {cats: cat_details});
});
app.get("/smuffy", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Smuffy", food: 'Pancit', age: 5, sleeping_spots: ['bed', 'sofa', 'outside'], image: 'cats-6.png'}, 
    ];
    response.render('details', {cats: cat_details});
});
app.get("/gordie", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Gordie", food: 'Carbonara', age: 6, sleeping_spots: ['cabinet', 'sofa', 'bed'], image: 'cats-7.png'}, 
    ];
    response.render('details', {cats: cat_details});
})
app.get("/tabbie", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Tabbie", food: 'Egg', age: 9, sleeping_spots: ['kitchen', 'outside', 'bed'], image: 'cats-8.png'}, 
    ];
    response.render('details', {cats: cat_details});
});
app.get("/mingming", function (request, response){
    console.log(request.url);
    let cat_details = [
        {name: "Mingming", food: 'Fish', age: 4, sleeping_spots: ['sofa', 'bed', 'table'], image: 'cats-9.png'}, 
    ];
    response.render('details', {cats: cat_details});
});

//port
app.listen(8000, function() {
    console.log("Listening to 8000");
});