const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { 
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    cuisine: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    contact: { type: String, required: true },
    opening_hours: { type: Map, of: String }, // { "Monday": "9AM-10PM" }
    menu_items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }]
});

// Creating an index for location (for geospatial queries)
restaurantSchema.index({ location: "2dsphere" });

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;