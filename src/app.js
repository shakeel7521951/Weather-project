const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

const static_Path = (path.join(__dirname,"../public"));
const template_path = (path.join(__dirname,"../template/views"));
const partial_path = (path.join(__dirname,"../template/partials"));

app.set('view engine', 'hbs');
app.set('views',template_path);
app.use(express.static(static_Path));
hbs.registerPartials(partial_path);



app.get("" , (req,res)=>{
    res.render('index');
})

app.get("/about" , (req,res)=>{
    res.render('about');
})

app.get("/weather" , (req,res)=>{
    res.render('weather');
})
app.get("*" , (req,res)=>{
    res.render('404error',{
        errorMsg:"Oops! Page not found"
    });
})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });