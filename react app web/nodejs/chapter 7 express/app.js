const express=require('express');
const path=require('path');
const app=express();
const port=80;

app.use('/static',express.static('static'))

//set templete engine
app.set('view engine','pug');

//path directories
app.set('views',path.join(__dirname,'views'));


app.get("/demo",(req,res)=>{
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
});


app.get("/",(req,res)=>{
    res.send("this is home page my app express node ")
});

app.get("/about",(req,res)=>{
    res.send("this is my about page app express node ")
});

app.get("/this",(req,res)=>{
    res.status(404).send("404 page not found.... ")
});

app.get("/contact",(req,res)=>{
    res.send("this is my contact page app express node ")
});

app.get("/service",(req,res)=>{
    res.send("this is my service page app express node ")
});
app.listen(port,()=>{
    console.log(`this port successful-${port}`)
})
