const withAuth = (req, res, next) => {
    if (!req.session.logginIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;