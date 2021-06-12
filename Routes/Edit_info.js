const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../Schema/User');
const Double = require('@mongoosejs/double');


// DB URL
const uri = "mongodb+srv://hamzama:2552@cluster0.asqxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//request users Info

router.get('/:userID',async(req,res) =>{
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));  

    try{
        const user = await User.findById(req.params.userID);
        res.json(user);
    }
    catch(err){
        res.json({msg: err});
    }
});

// update user info

router.patch('/:userID',async(req,res) =>{
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},
    () => console.log('connected to db'));  

try{
    mongoose.set('returnOriginal', false);
    const user = await User.findByIdAndUpdate(req.params.userID,
        {$set: 
            {Firstname: req.body.Firstname, 
            Middlename: req.body.Middlename, 
            Lastname: req.body.Lastname, 
            Email: req.body.Email, 
            Phone: req.body.Phone, 
            CardNumber: req.body.CardNumber }});
    res.json(user);
}
catch(err){
    res.json({msg: err});
}
});


module.exports = router;