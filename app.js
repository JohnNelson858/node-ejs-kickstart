//include Express
const express = require('express');

//load user data from the data folder
const userData = require('./data/test.json');

//temporary test to make sure data loads
console.log("--- DATA LOAD TEST ---");
console.log(userData[0]);
console.log("----------------------");

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

//index/home URL
app.get('/',(req,res)=>{
    let title = "Home Page";
    res.render('pages/index',{'title': title});
});

//about URL
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

//electronics URL
app.get('/electronics',(req,res)=>{
    let title = "Electronics";
    res.render('pages/electronics',{'title': title});
});

//web projects URL
app.get('/web-projects',(req,res)=>{
    let title = "Web Projects";
    res.render('pages/web-projects',{'title': title});
});

//users list URL
app.get('/users',(req,res)=>{
    let title = "User Directory";
    res.render('users/index',{'title': title, 'users': userData});
});

//individual user view URL
app.get('/users/view/:id',(req,res)=>{
    let id = req.params.id;
    res.render('users/view',{'title': 'User Profile', 'user': userData[--id]});
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});