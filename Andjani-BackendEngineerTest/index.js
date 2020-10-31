const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req,res){
   res.status(200).json("sukses")
})
app.use('/api',require('./model/province'));
app.use('/api',require('./model/city'));

app.listen(process.env.port || 3000,()=>{
    console.log("server listening in port 3000")
   })
