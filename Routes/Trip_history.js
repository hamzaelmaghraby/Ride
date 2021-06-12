const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const trips = require('../Schema/Trips_Schema');
const Double = require('@mongoosejs/double');


// DB URL
const uri = "mongodb+srv://hamzama:2552@cluster0.asqxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//request trips history

router.get('/',async(req,res) =>{
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));  

    try{
        const Trips = await trips.find(req.query);
        console.log(Trips);
        res.json(Trips);
    }
    catch(err){
        res.json({msg: err});
    }
});


module.exports = router;