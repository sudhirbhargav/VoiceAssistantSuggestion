const Restaurant = require('../models/restaurant.model.js');
const MenuItem = require('../models/menuItem.model.js');
const {extractDishName}=require("./gemini.js")

const getTop5Items = async (req, res) => {
    try {
        const { longitude, latitude } = req.query;
        const requestText=req.body.speechText
        const trimedText=await extractDishName(requestText)
        console.log(trimedText);
        const restaurants = await Restaurant.find({
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                    $maxDistance: 30000 // 5 km radius
                }
            }
        }).populate('menu_items');

        const topItems = restaurants.map(r => ({
            restaurant: r.name,
            items: r.menu_items
                .sort((a, b) => b.avg_rating - a.avg_rating) // Sort by rating
                .slice(0, 5) // Take top 5
        }));

        res.json(topItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getTop5Items };