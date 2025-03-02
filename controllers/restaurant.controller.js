const Restaurant = require('../models/restaurant.model.js');
const MenuItem = require('../models/menuItem.model.js');
const {extractDishName}=require("./gemini.js")



const getTop5Items = async (req, res) => {
    try {
        const { longitude, latitude } = req.query;
        const requestText=req.body.speechText
        const trimedText=await extractDishName(requestText)
        console.log(trimedText);
        let restaurants; 
        if(trimedText==="No dish found"){
            restaurants = await Restaurant.aggregate([
                {
                    $geoNear: {
                        near: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                        distanceField: "distance",
                        maxDistance: 300000, // 30 km radius
                        spherical: true
                    }
                },
                {
                    $lookup: {
                        from: "menuitems", // Collection name for MenuItems
                        localField: "_id",
                        foreignField: "restaurant_id",
                        as: "menu_items"
                    }
                },
                {
                    $match: {
                        "menu_items.0": { $exists: true } // Ensures the restaurant has at least one menu item
                    }
                },
                {
                    $addFields: {
                        top_menu_item: { 
                            $arrayElemAt: [{ 
                                $sortArray: { input: "$menu_items", sortBy: { avg_rating: -1 } } 
                            }, 0] 
                        }
                    }
                },
                {
                    $project: {
                        name: 1,
                        location: 1,
                        rating: 1,
                        contact: 1,
                        top_menu_item: 1 // Include only the top-rated menu item
                    }
                },
                { 
                    $sort: { rating: -1 } // Sort by highest rating
                },
                { 
                    $limit: 5 // Get top 5 restaurants
                }
            ]);
        }
        else{
        restaurants = await Restaurant.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                    distanceField: "distance",
                    maxDistance: 30000000, // 30 km radius
                    spherical: true
                }
            },
            {
                $lookup: {
                    from: "menuitems", // The collection name for MenuItems
                    localField: "_id",
                    foreignField: "restaurant_id",
                    as: "menu_items"
                }
            },
            {
                $addFields: {
                    menu_items: {
                        $filter: {
                            input: "$menu_items",
                            as: "item",
                            cond: { $regexMatch: { input: "$$item.name", regex: trimedText, options: "i" } }
                        }
                    }
                }
            },
            {
                $match: {
                    "menu_items.0": { $exists: true } // Ensures only restaurants with matching items are returned
                }
            }
        ]);
    }



        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getTop5Items };