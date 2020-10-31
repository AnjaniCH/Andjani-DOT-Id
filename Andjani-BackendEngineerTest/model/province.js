const express = require('express');
const router = express.Router();
const axios = require('axios');
var RajaOngkir_APIkey = "0df6d5bf733214af6c6644eb8717c92c";


router.get('/provinsi/all', function(req,res){
    axios.get("https://api.rajaongkir.com/starter/province",{
        headers:{
            key:RajaOngkir_APIkey
        },
        
    }).then((response)=>{
        res.status(200).json(response.data.rajaongkir.results);
})
})


router.get('/provinsi/:id', function(req,res){
    axios.get("https://api.rajaongkir.com/starter/province",{
        headers:{
            key:RajaOngkir_APIkey
        },
        params:{
            id:req.params.id
        }
    }).then((response)=>{
        res.status(200).json(response.data.rajaongkir.results.province);
})
})



module.exports = router