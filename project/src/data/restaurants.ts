export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  tags: string[];
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  distance: string;
  rating: number;
  image: string;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    distance: "0.5 miles",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 101,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: 12.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["pizza", "vegetarian", "popular"]
      },
      {
        id: 102,
        name: "Spaghetti Carbonara",
        description: "Pasta with eggs, cheese, pancetta, and black pepper",
        price: 14.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["pasta", "popular"]
      },
      {
        id: 103,
        name: "Tiramisu",
        description: "Coffee-flavored Italian dessert",
        price: 7.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["dessert", "popular"]
      },
      {
        id: 104,
        name: "Caprese Salad",
        description: "Salad with tomatoes, mozzarella, and basil",
        price: 9.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["salad", "vegetarian"]
      },
      {
        id: 105,
        name: "Lasagna",
        description: "Layered pasta dish with meat sauce and cheese",
        price: 15.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["pasta", "popular"]
      }
    ]
  },
  {
    id: 2,
    name: "Sushi Palace",
    cuisine: "Japanese",
    distance: "0.8 miles",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 201,
        name: "Dragon Roll",
        description: "Eel, crab, cucumber topped with avocado",
        price: 16.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["sushi", "popular"]
      },
      {
        id: 202,
        name: "Salmon Nigiri",
        description: "Fresh salmon over pressed vinegared rice",
        price: 12.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["nigiri", "popular"]
      },
      {
        id: 203,
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu and seaweed",
        price: 4.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["soup", "vegetarian"]
      },
      {
        id: 204,
        name: "Tempura Udon",
        description: "Thick noodle soup with tempura shrimp",
        price: 15.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["noodles", "popular"]
      },
      {
        id: 205,
        name: "Matcha Ice Cream",
        description: "Green tea flavored ice cream",
        price: 6.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["dessert"]
      }
    ]
  },
  {
    id: 3,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    distance: "0.3 miles",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 301,
        name: "Street Tacos",
        description: "Three corn tortillas with marinated meat, onions, and cilantro",
        price: 10.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["tacos", "popular"]
      },
      {
        id: 302,
        name: "Chicken Quesadilla",
        description: "Grilled flour tortilla filled with chicken and cheese",
        price: 12.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["quesadilla", "popular"]
      },
      {
        id: 303,
        name: "Guacamole & Chips",
        description: "Fresh avocado dip with homemade tortilla chips",
        price: 8.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["appetizer", "vegetarian", "popular"]
      },
      {
        id: 304,
        name: "Beef Burrito",
        description: "Large flour tortilla filled with beef, rice, beans, and cheese",
        price: 13.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["burrito"]
      },
      {
        id: 305,
        name: "Churros",
        description: "Fried dough pastry with cinnamon sugar",
        price: 6.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1624471306582-e2dfa383d5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["dessert"]
      }
    ]
  },
  {
    id: 4,
    name: "Burger Joint",
    cuisine: "American",
    distance: "0.6 miles",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 401,
        name: "Classic Cheeseburger",
        description: "Beef patty with cheese, lettuce, tomato, and special sauce",
        price: 11.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["burger", "popular"]
      },
      {
        id: 402,
        name: "Loaded Fries",
        description: "Crispy fries topped with cheese, bacon, and green onions",
        price: 8.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["sides", "popular"]
      },
      {
        id: 403,
        name: "Chicken Sandwich",
        description: "Grilled or fried chicken breast with lettuce and mayo",
        price: 10.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["sandwich"]
      },
      {
        id: 404,
        name: "Milkshake",
        description: "Thick and creamy shake in various flavors",
        price: 5.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["drink", "dessert", "popular"]
      },
      {
        id: 405,
        name: "Onion Rings",
        description: "Battered and fried onion rings",
        price: 6.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["sides"]
      }
    ]
  },
  {
    id: 5,
    name: "Green Garden",
    cuisine: "Vegetarian",
    distance: "1.0 miles",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 501,
        name: "Buddha Bowl",
        description: "Rice bowl with roasted vegetables, tofu, and tahini dressing",
        price: 13.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["bowl", "vegetarian", "popular"]
      },
      {
        id: 502,
        name: "Avocado Toast",
        description: "Whole grain toast with smashed avocado, microgreens, and seeds",
        price: 9.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["breakfast", "vegetarian", "popular"]
      },
      {
        id: 503,
        name: "Quinoa Salad",
        description: "Quinoa with mixed vegetables, feta, and lemon dressing",
        price: 11.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["salad", "vegetarian"]
      },
      {
        id: 504,
        name: "Smoothie Bowl",
        description: "Thick fruit smoothie topped with granola and fresh fruits",
        price: 10.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["breakfast", "vegetarian", "popular"]
      },
      {
        id: 505,
        name: "Veggie Burger",
        description: "Plant-based patty with all the fixings",
        price: 12.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["burger", "vegetarian"]
      }
    ]
  }
];