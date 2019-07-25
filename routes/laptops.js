const router = require('express').Router();
let   Laptop = require('../models/laptop.model');

//LAPTOPS
router.route('/').get((req, res) => {
    Laptop.find()
        .then(laptops => res.json(laptops))
        .catch(err => res.status(400).json('ERROR ' + err));
});

//LAPTOP
router.route('/:id').get((req, res) => {
    Laptop.findById(req.params.id)
        .then(laptop => res.json(laptop))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//ADD LAPTOP
router.route('/add').post((req, res) => {
    const brand = req.body.brand;

    const newLaptop = new Laptop({brand});

    newLaptop.save()
        .then(() => res.json('Successfully Added ' + newLaptop.brand))
        .catch(err => res.status(400).json('ERROR ' + err));
});

//UPDATE LAPTOP
router.route('/update/:id').post((req, res) => {
    Laptop.findByIdAndUpdate(req.params.id)
        .then(laptop => {
            laptop.brand = req.body.brand;

            laptop.save()
            .then(() => res.json(laptop.brand + ' has been updated!'))
            .catch(err => res.status(400).json('ERROR: ' + err))
        })
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//DELETE LAPTOP
router.route('/:id').delete((req, res) => {

    Laptop.findByIdAndDelete(req.params.id)
        .then(() => res.json(req.body.brand + ' Deleted'))
        .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;