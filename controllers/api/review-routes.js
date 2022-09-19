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

		// res.status(200).json(newReview);
		res.redirect(`/dish/${req.body.dish_id}`);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", withAuth, async (req, res) => {
	try {
		const [affectedRows] = await DishReviews.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (affectedRows > 0) {
			// res.status(200).end();
			res.redirect(`/dish/${req.body.dish_id}`);
		} else {
			res.status(404).end();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete("/:id", withAuth, (req, res) => {
	try {
		const [affectedRows] = DishReviews.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (affectedRows > 0) {
			// res.status(200).end();
			res.redirect(`/dish/${req.body.dish_id}`);
		} else {
			res.status(404).end();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
