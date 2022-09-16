const { Dishes } = require("../models");

const dishesData = [
  {
    price: 16.0,
    name: "Kung Pao Chicken",
    description: "Chicken with vegetables in a spicy Kung Pao sauce",
    restaurant_id: 1,
  },
  {
    price: 15.0,
    name: "Szechuan Beef",
    description: "Stir fried beef with vegetables",
    restaurant_id: 1,
  },
  {
    price: 15.0,
    name: "Chicken Lo Mein",
    description: "Noodles with chicken and vegetables",
    restaurant_id: 1,
  },
  {
    price: 13.0,
    name: "Pork Dumplings",
    description: "Pork dumplings, steamed or fried.",
    restaurant_id: 2,
  },
  {
    price: 17.0,
    name: "Fried Rice",
    description: "Choice of pork, chicken, or vegetarian.",
    restaurant_id: 2,
  },
  {
    price: 18,
    name: "Sesame Chicken",
    description: "Chicken tossed in a spicy sesame sauce.",
    restaurant_id: 2,
  },
  {
    price: 15.0,
    name: "Pad See Ew",
    description: "Flat noodles tossed with broccoli in delightful sauce.",
    restaurant_id: 3,
  },
  {
    price: 16.0,
    name: "Pad Kee Mao",
    description: "Flat noodles tossed with vegetables with a spicy soy sauce.",
    restaurant_id: 3,
  },
  {
    price: 20.0,
    name: "Yellow Curry",
    description:
      "Vegetables, potatoes, cooked in a yellow coconut curry sauce.",
    restaurant_id: 3,
  },
  {
    price: 14.0,
    name: "Bacon Cheeseburger",
    description:
      "Two 1/4lb beef patties, Bacon, Tomato, Cheddar,Spicy Aioli, Challah Bun",
    restaurant_id: 4,
  },
  {
    price: 15.0,
    name: "Meatball Sandwich",
    description: "Tomato Braised Meatballs, Pesto, Mozzarella",
    restaurant_id: 4,
  },
  {
    price: 13.0,
    name: "Chicken & Pesto Sandwich",
    description: "Basil Pesto, Mozzarella, Sweet Peppers",
    restaurant_id: 4,
  },
  {
    price: 13.0,
    name: "Watermelon Heirloom Cherry Tomato Salad",
    description:
      "Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
    restaurant_id: 5,
  },
  {
    price: 17.0,
    name: "Albacore Tuna Melt",
    description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
    restaurant_id: 5,
  },
  {
    price: 32.0,
    name: "Sicilian Swordfish Steak",
    description:
      "Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
    restaurant_id: 5,
  },
  {
    price: 13.0,
    name: "Meat Calzone",
    description: "Pepperoni, Canadian Bacon, Mozzarella/Provolone & Marinara",
    restaurant_id: 6,
  },
  {
    price: 16.0,
    name: "Crispy Chicken Salad",
    description:
      "Iceberg, Crispy Chicken, Pico de Gallo, Corn, Cheddar Cheese, Avocado, Tortilla Strips & Chipotle Dressing",
    restaurant_id: 6,
  },
  {
    price: 20.0,
    name: "Pepperoni Meat'Za",
    description: "Pepperoni & Marinara",
    restaurant_id: 6,
  },
  {
    price: 11.0,
    name: "Breakfast Sandwich",
    description: "Two eggs, Bacon, Tomato, Cheddar,Spicy Aioli, Challah Bun",
    restaurant_id: 7,
  },
  {
    price: 15.0,
    name: "Meatball Sandwich",
    description: "Tomato Braised Meatballs, Pesto, Mozzarella",
    restaurant_id: 7,
  },
  {
    price: 13.0,
    name: "Chicken & Pesto Sandwich",
    description: "Basil Pesto, Mozzarella, Sweet Peppers",
    restaurant_id: 7,
  },
  {
    price: 13.0,
    name: "Watermelon Heirloom Cherry Tomato Salad",
    description:
      "Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
    restaurant_id: 8,
  },
  {
    price: 17.0,
    name: "Albacore Tuna Melt",
    description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
    restaurant_id: 8,
  },
  {
    price: 32.0,
    name: "Sicilian Swordfish Steak",
    description:
      "Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
    restaurant_id: 8,
  },
  {
    price: 13.0,
    name: "Meat Calzone",
    description: "Pepperoni, Canadian Bacon, Mozzarella/Provolone & Marinara",
    restaurant_id: 9,
  },
  {
    price: 16.0,
    name: "Crispy Chicken Salad",
    description:
      "Iceberg, Crispy Chicken, Pico de Gallo, Corn, Cheddar Cheese, Avocado, Tortilla Strips & Chipotle Dressing",
    restaurant_id: 9,
  },
  {
    price: 20.0,
    name: "Pepperoni Meat'Za",
    description: "Pepperoni & Marinara",
    restaurant_id: 9,
  },
  {
    price: 16.0,
    name: "Bison Burger",
    description:
      "1/2 lb Bison patty, gouda, crispy onions, and mesquite bbq sauce.",
    restaurant_id: 10,
  },
  {
    price: 12,
    name: "Chicken Tenders",
    description: "Best chicken tenders in the West!",
    restaurant_id: 10,
  },
  {
    price: 13.0,
    name: "BLT",
    description:
      "Thick-cut bacon, heirloom tomato, butter lettuce on a ciabatta with garlic aioli.",
    restaurant_id: 10,
  },
  {
    price: 13.0,
    name: "Watermelon Heirloom Cherry Tomato Salad",
    description:
      "Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
    restaurant_id: 11,
  },
  {
    price: 17.0,
    name: "Albacore Tuna Melt",
    description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
    restaurant_id: 11,
  },
  {
    price: 32.0,
    name: "Sicilian Swordfish Steak",
    description:
      "Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
    restaurant_id: 11,
  },
  {
    price: 13.0,
    name: "Garlic Knots",
    description:
      "Our world-famous dough, knotted and drizzled in garlic-infused extra-virgin olive oil.",
    restaurant_id: 12,
  },
  {
    price: 16.0,
    name: "3-Cheese Pizza",
    description: "Mozarella, Provalone & Parmasean",
    restaurant_id: 12,
  },
  {
    price: 20.0,
    name: "Pepperoni Pizza",
    description: "Pepperoni, Mozarella & Marinara",
    restaurant_id: 12,
  },
];

const seedDishes = () => Dishes.bulkCreate(dishesData);

module.exports = seedDishes;
