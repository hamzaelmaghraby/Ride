const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../Schema/User');
const cars = require('../Schema/cars');
const classes = require('../Schema/classes');
const garages = require('../Schema/garage');
const zones = require('../Schema/zone');
const Double = require('@mongoosejs/double');



const uri = "mongodb+srv://hamzama:2552@cluster0.asqxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//find nearest garages

router.get('/',async(req,res) =>{
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));  

    try{
        const rez = await garages.findOne({
            location: {
             $nearSphere: { $geometry:{
                 type : "Point",
                 coordinates : req.body.coordinates
             }}
            }
          });
          console.log(rez._id);
          const car = await cars.find({garageID: rez._id, class: req.body.class});
          console.log(car);
          res.json(car);
    }
    catch(err){
        res.json({msg: err});
    }
});


module.exports = router;