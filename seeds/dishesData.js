const { Dishes } = require("../models");

const dishesData = [
	{
		price: 16.0,
		name: "Ramen",
		image_file: "asian-food-1.jpg",
		description: "Chicken ramen with vegetables.",
		restaurant_id: 1,
	},
	{
		price: 15.0,
		name: "Pho",
		image_file: "asian-food-2.jpg",
		description: "Vietnamese noodle soup.",
		restaurant_id: 1,
	},
	{
		price: 35.0,
		name: "Sushi Platter",
		image_file: "asian-food-3.jpg",
		description: "Chef's selection of sushi.",
		restaurant_id: 1,
	},
	{
		price: 19.0,
		name: "Ramen",
		image_file: "asian-food-1.jpg",
		description: "Chicken ramen with vegetables.",
		restaurant_id: 2,
	},
	{
		price: 18.0,
		name: "Pho",
		image_file: "asian-food-2.jpg",
		description: "Vietnamese noodle soup.",
		restaurant_id: 2,
	},
	{
		price: 38,
		name: "Sushi Platter",
		image_file: "asian-food-3.jpg",
		description: "Chef's selection of sushi.",
		restaurant_id: 2,
	},
	{
		price: 15.0,
		name: "Ramen",
		image_file: "asian-food-1.jpg",
		description: "Chicken ramen with vegetables.",
		restaurant_id: 3,
	},
	{
		price: 16.0,
		name: "Pho",
		image_file: "asian-food-2.jpg",
		description: "Vietnamese noodle soup.",
		restaurant_id: 3,
	},
	{
		price: 40.0,
		name: "Sushi Platter",
		image_file: "asian-food-3.jpg",
		description: "Chef's selection of sushi.",
		restaurant_id: 3,
	},
	{
		price: 14.0,
		name: "Bacon Cheeseburger",
		image_file: "american-food-1.jpg",
		description:
			"Two 1/4lb beef patties, Bacon, Tomato, Cheddar,Spicy Aioli, Challah Bun",
		restaurant_id: 4,
	},
	{
		price: 15.0,
		name: "Meatball Sandwich",
		image_file: "american-food-2.jpg",
		description: "Tomato Braised Meatballs, Pesto, Mozzarella",
		restaurant_id: 4,
	},
	{
		price: 13.0,
		name: "Chicken & Pesto Sandwich",
		image_file: "american-food-3.jpg",
		description: "Basil Pesto, Mozzarella, Sweet Peppers",
		restaurant_id: 4,
	},
	{
		price: 13.0,
		name: "Watermelon Heirloom Cherry Tomato Salad",
		image_file: "american-food-1.jpg",
		description:
			"Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
		restaurant_id: 5,
	},
	{
		price: 17.0,
		name: "Albacore Tuna Melt",
		image_file: "american-food-2.jpg",
		description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
		restaurant_id: 5,
	},
	{
		price: 32.0,
		name: "Sicilian Swordfish Steak",
		image_file: "american-food-3.jpg",
		description:
			"Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
		restaurant_id: 5,
	},
	{
		price: 13.0,
		name: "Meat Calzone",
		image_file: "american-food-1.jpg",
		description: "Pepperoni, Canadian Bacon, Mozzarella/Provolone & Marinara",
		restaurant_id: 6,
	},
	{
		price: 16.0,
		name: "Crispy Chicken Salad",
		image_file: "american-food-2.jpg",
		description:
			"Iceberg, Crispy Chicken, Pico de Gallo, Corn, Cheddar Cheese, Avocado, Tortilla Strips & Chipotle Dressing",
		restaurant_id: 6,
	},
	{
		price: 20.0,
		name: "Pepperoni Meat'Za",
		image_file: "american-food-3.jpg",
		description: "Pepperoni & Marinara",
		restaurant_id: 6,
	},
	{
		price: 11.0,
		name: "Breakfast Sandwich",
		image_file: "mexican-food-1.jpg",
		description: "Two eggs, Bacon, Tomato, Cheddar,Spicy Aioli, Challah Bun",
		restaurant_id: 7,
	},
	{
		price: 15.0,
		name: "Meatball Sandwich",
		image_file: "mexican-food-2.jpg",
		description: "Tomato Braised Meatballs, Pesto, Mozzarella",
		restaurant_id: 7,
	},
	{
		price: 13.0,
		name: "Chicken & Pesto Sandwich",
		image_file: "mexican-food-3.jpg",
		description: "Basil Pesto, Mozzarella, Sweet Peppers",
		restaurant_id: 7,
	},
	{
		price: 13.0,
		name: "Watermelon Heirloom Cherry Tomato Salad",
		image_file: "mexican-food-1.jpg",
		description:
			"Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
		restaurant_id: 8,
	},
	{
		price: 17.0,
		name: "Albacore Tuna Melt",
		image_file: "mexican-food-2.jpg",
		description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
		restaurant_id: 8,
	},
	{
		price: 32.0,
		name: "Sicilian Swordfish Steak",
		image_file: "mexican-food-3.jpg",
		description:
			"Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
		restaurant_id: 8,
	},
	{
		price: 13.0,
		name: "Meat Calzone",
		image_file: "mexican-food-1.jpg",
		description: "Pepperoni, Canadian Bacon, Mozzarella/Provolone & Marinara",
		restaurant_id: 9,
	},
	{
		price: 16.0,
		name: "Crispy Chicken Salad",
		image_file: "mexican-food-2.jpg",
		description:
			"Iceberg, Crispy Chicken, Pico de Gallo, Corn, Cheddar Cheese, Avocado, Tortilla Strips & Chipotle Dressing",
		restaurant_id: 9,
	},
	{
		price: 20.0,
		name: "Pepperoni Meat'Za",
		image_file: "mexican-food-3.jpg",
		description: "Pepperoni & Marinara",
		restaurant_id: 9,
	},
	{
		price: 16.0,
		name: "Bison Burger",
		image_file: "italian-food-1.jpg",
		description:
			"1/2 lb Bison patty, gouda, crispy onions, and mesquite bbq sauce.",
		restaurant_id: 10,
	},
	{
		price: 12,
		name: "Chicken Tenders",
		image_file: "italian-food-2.jpg",
		description: "Best chicken tenders in the West!",
		restaurant_id: 10,
	},
	{
		price: 13.0,
		name: "BLT",
		image_file: "italian-food-3.jpg",
		description:
			"Thick-cut bacon, heirloom tomato, butter lettuce on a ciabatta with garlic aioli.",
		restaurant_id: 10,
	},
	{
		price: 13.0,
		name: "Watermelon Heirloom Cherry Tomato Salad",
		image_file: "italian-food-1.jpg",
		description:
			"Cucumber, Red Onion, Cotija, Mint, Chili-SUmac, Reduced Balsamic",
		restaurant_id: 11,
	},
	{
		price: 17.0,
		name: "Albacore Tuna Melt",
		image_file: "italian-food-2.jpg",
		description: "Sourdough, Fennel Capers, Red Onion, Tomato, Cheddar",
		restaurant_id: 11,
	},
	{
		price: 32.0,
		name: "Sicilian Swordfish Steak",
		image_file: "italian-food-3.jpg",
		description:
			"Israeli Couscous, Black Olives, Capers, Preserved Lemon, Pine Nuts, Sultanas, Mint",
		restaurant_id: 11,
	},
	{
		price: 13.0,
		name: "Garlic Knots",
		image_file: "italian-food-1.jpg",
		description:
			"Our world-famous dough, knotted and drizzled in garlic-infused extra-virgin olive oil.",
		restaurant_id: 12,
	},
	{
		price: 16.0,
		name: "3-Cheese Pizza",
		image_file: "italian-food-2.jpg",
		description: "Mozarella, Provalone & Parmasean",
		restaurant_id: 12,
	},
	{
		price: 20.0,
		name: "Pepperoni Pizza",
		image_file: "italian-food-3.jpg",
		description: "Pepperoni, Mozarella & Marinara",
		restaurant_id: 12,
	},
];

const seedDishes = () => Dishes.bulkCreate(dishesData);

module.exports = seedDishes;
