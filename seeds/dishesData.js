const { Dishes } = require("../models");

const dishesData = 
[
    {
        price: "$11.00",
        name: "Breakfast Sandwich",
        description: "Two eggs, Bacon, Tomato, Cheddar,Spicy Aioli, Challah Bun",
        restaurant_id: "1"
    }, 
    {
        price: "$15.00",
        name: "Meatball Sandwich",
        description: "Tomato Braised Meatballs, Pesto, Mozzarella",
        restaurant_id: "1"
    },
    {
        price: "$13.00",
        name: "Chicken & Pesto Sandwich",
        description: "Basil Pesto, Mozzarella, Sweet Peppers",
        restaurant_id: "1"
    },
    {
        price: "$13.00",
        name: "Watermelon Heirloom Cherry Tomato Salad",
        description: "Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
        restaurant_id: "2"
    },
    {
        price: "$17.00",
        name: "Albacore Tuna Melt",
        description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
        restaurant_id: "2"
    },
    {
        price: "$32.00",
        name: "Sicilian Swordfish Steak",
        description: "Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
        restaurant_id: "2"
    },
    {
        price: "$13.00",
        name: "Meat Calzone",
        description: "Pepperoni, Canadian Bacon, Mozzarella/Provolone & Marinara",
        restaurant_id: "3"
    },
    {
        price: "$16.00",
        name: "Crispy Chicken Salad",
        description: "Iceberg, Crispy Chicken, Pico de Gallo, Corn, Cheddar Cheese, Avocado, Tortilla Strips & Chipotle Dressing",
        restaurant_id: "3"
    }, 
    {
        price: "$11.00 for 10inch, $20 for 14inch, $29 for 18inch",
        name: "Pepperoni Meat'Za",
        description: "Pepperoni & Marinara",
        restaurant_id: "3"
    }
]

const seedDishes = () => Dishes.bulkCreate(dishesData);

module.exports = seedDishes;