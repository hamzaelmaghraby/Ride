const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const Trip_history = mongoose.Schema({
  User_ID: String,
    Booking_Garage: {
        type: { 
          type: String, // Don't do { location: { type: String } }
          enum: ['Point'], // 'location.type' must be 'Point'
          //required: true
        },
        coordinates: {
          type: [Number],
          required: true,


        },
      },
    Booking_time: Date,
    Total_Fees: Double,
    Rating: Number,
    Car_brand: String,
    Car_model: String,
    DropOFF_Garage: {
        type: { 
          type: String, // Don't do { location: { type: String } }
          enum: ['Point'], // 'location.type' must be 'Point'
          //required: true
        },
        coordinates: {
          type: [Number],
          required: true,


        },
      },
    DropOFF_Time: Date
});

module.exports = mongoose.model('Trip_history', Trip_history, 'Trip_history');