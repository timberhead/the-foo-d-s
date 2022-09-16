const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { DishReviews } = require("../../models");

router.post("/", withAuth, async (req, res) => {
	try {
		const newReview = await DishReviews.create({
			rating: req.body.rating,
			review: req.body.review,
			dish_id: req.body.dish_id,
			user_id: req.session.userId,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/", withAuth, async (req, res) => {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", withAuth, (req, res) => {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
