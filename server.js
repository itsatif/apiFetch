const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = [];

app.use(cors({
    origin: '*',
}));

app.use(bodyParser.json());
app.use("/api",require("./controller/jwt"));
app.get("/",(req,res)=> res.send('response is send'));

app.post("/",(req,res)=>{
    res.send(`this is my response`)
    const data = req.body;
    db.push(data);
})

app.get('/login',(req,res)=>{
    res.send(`The updated database is ${db}`);
})

const Port = 4000;

app.listen(Port,(req,res)=>console.log(`server is running at ${Port}`));