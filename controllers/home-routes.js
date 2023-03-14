const router = require('express').Router();
const { Character, Class } = require('../models');
const withAuth = require('../utils/auth');



// login req
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
