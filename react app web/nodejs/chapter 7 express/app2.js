const express=require('express');
const path=require('path');
const app=express();
const fs=require('fs');
const port=80;

app.use('/static',express.static('static'))

//set templete engine
app.set('view engine','pug');

//path directories
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded())

// app.get("/demo",(req,res)=>{
//     res.render('demo', { title: 'Hey', message: 'Hello there!' })
// });


app.get("/index",(req,res)=>{
    con="there is content page";
    res.render("index.pug",{'title':'spark','content':con})
});


app.post("/",(req,res)=>{
    console.log(req.body)
    con="sucessful sumbit";
    res.render("demo.pug",{'title':'spark','message':con})

    email=req.body.email;
    username=req.body.username;
    password=req.body.password;
    
    let output=`this is our user name ${username}
                 email: ${email}
                 password : ${password}`
    
    fs.writeFileSync("output.txt",output);
    
});
app.get("/this",(req,res)=>{
    res.status(404).send("404 page not found.... ")
});



app.listen(port,()=>{
    console.log(`this port successful-${port}`)
})
