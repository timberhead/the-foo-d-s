const withAuth = (req, res, next) => {
	console.log(req.session);
	console.log(req.session.loggedIn);
	if (!req.session.loggedIn) {
		res.redirect("/login");
	} else {
		next();
	}
};

module.exports = withAuth;
