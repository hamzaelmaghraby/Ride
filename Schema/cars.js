const mongoose = require('mongoose');
const randToken = require('rand-token');


const carSchema = new mongoose.Schema({
    UUID: {
        type: String,
        default: function() {
            return randToken.generate(16);
        },
        unique: true
    },
    
    brand : {
            type: String ,
            required: true, 
           

    },
    plate : {
        type:String, 
        required: true, 
        min: 3,
        unique: true
    },
     color : {
         type: String,
         required: true,
         //max: 1024,
         

     },
     garageID : {
        type: String,
        required: true
  
      },
    
     class : {
        type: String,
        required: true

     },

     manafactureDate : {
        type: Date,
        // required: true

     },
     state : {
         type: String,
         default: "Available"
     }

});
module.exports = mongoose.model('cars', carSchema, 'cars');