const router = require("express").Router();
const { Users } = require("../../models");

router.post("/", async (req, res) => {
	try {
		const newUser = await Users.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.userId = newUser.id;
			req.session.username = newUser.username;
			req.session.loggedIn = true;

			res.status(201).json(newUser);
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/login", async (req, res) => {
	try {
		const user = await Users.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!user) {
			res.status(400).json({ message: "Incorrect login credentials" });
			return;
		}

		const validPassword = user.checkPassword(req.body.password);

		if (!validPassword) {
			res.status(400).json({ message: "Incorrect login credentials" });
			return;
		}

		req.session.save(() => {
			req.session.userId = newUser.id;
			req.session.username = newUser.username;
			req.session.loggedIn = true;

			res.status(200).json({ message: "You are now logged in" });
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
