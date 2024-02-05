const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs=require('fs')
const url=require('url')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const array = ["rocky", "rohan","raju"];

app.post('/endpoint', (req, res) => {
    const postData = req.body;
    const urls=url.parse(req.url,true)

    const d=urls.query.name
    const data=array.includes(d)
    
    switch(data){
        case true:
            res.send("found "+d)
            console.log("found "+d)
            break;
        case false:
            res.send("not found  " +d)
            console.log("not found  " +d)

    }

})

app.listen(5000)