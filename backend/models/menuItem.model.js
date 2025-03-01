const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, enum: ['Main Course', 'Dessert', 'Drink', 'Appetizer'], required: true },
    ingredients: { type: [String] },
    availability: { type: Boolean, default: true },
    avg_rating: { type: Number, min: 0, max: 5, default: 0 }
});

const menuItemModel = mongoose.model('MenuItem', menuItemSchema);

module.exports = menuItemModel;