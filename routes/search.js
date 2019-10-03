const router = require('express').Router();
let   Laptop = require('../models/laptop.model');

//SEARCH REGEX FUNCTION
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


//LAPTOPS SEARCH QUERY
router.route('/').get((req,res) => {
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Laptop.find({ 
        $or: [
        {"name" : regex},
        {"brand" : regex}
        
        ]
    })
    .then(foundLaptop => res.json(foundLaptop))
    .catch(err => res.status(400).json('ERROR: ' + err)); 
});

module.exports = router;