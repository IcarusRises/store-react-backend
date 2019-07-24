const router = require('express').Router();
let   Laptop = require('../models/laptop.model');

router.route('/').get((req, res) => {
    Laptop.find()
        .then(laptops => res.json(laptops))
        .catch(err => res.status(400).json('ERROR ' + err));
});

router.route('/add').post((req, res) => {
    const brand = req.body.brand;

    const newLaptop = new Laptop({brand});

    newLaptop.save()
        .then(() => res.json('Successfully Added ' + newLaptop.brand[0].toUpperCase() + newLaptop.brand.substring(1)))
        .catch(err => res.status(400).json('ERROR ' + err));
});

module.exports = router;