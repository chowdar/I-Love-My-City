let express = require('express');

let router = express.Router();

let imgs = require('../Models/images');

router.get('/:city', (req, res) => {
    let city = req.params.city;
    let cityName, cityTitle;
    
    switch(city){
        case 'hyderabad':
            cityName = city;
            cityTitle = 'is the capital and largest city of the South Indian.';
            break;
        case 'chennai':
            cityName = city;
            cityTitle = 'the capital city of Tamil Nadu';
            break;
        case 'banglore':
            cityName = city;
            cityTitle = 'is famous for Electronic city';
            break;
        case 'mumbai':
            cityName = city;
            cityTitle = 'Just like the Gateway of India';
            break;
        default:
        cityName = 'error'
        cityTitle = 'please check city you entered'
    }

    let images = imgs[cityName];

    res.render('myCity', {
        cityName,
        cityTitle,
        images
    })
})
module.exports = router;