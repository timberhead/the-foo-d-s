const router = require("express").Router();
const { FoodTypes, Restaurants } = require("../models");

router.get("/", async (req, res) => {
	try {
		const typeData = await FoodTypes.findAll({
			include: [Restaurants],
		});

		const types = typeData.map((type) => type.get({ plain: true }));

		// res.status(200).json(types);
		res.render("homepage", { types });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	// if (req.session.loggedIn) {
	// 	res.redirect("/");
	// 	return;
	// }
	res.render("login");
});

module.exports = router;
