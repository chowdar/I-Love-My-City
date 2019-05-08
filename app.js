let express = require('express');
let path = require('path');

let imgs = require('./Models/images');

let mycityRoutes = require('./routes/state/myCity')
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    let images = imgs.city;
    res.render('home', {
        title: 'Select your favourite city from the top menu',
        images
    })
})
app.use('/state', mycityRoutes)


module.exports = app;