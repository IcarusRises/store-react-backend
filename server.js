const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//MONGODB DATABASE
const dbRoute = process.env.DB;

//CONNECTING BACKEND TO DATABASE
mongoose.connect(dbRoute, {useNewUrlParser:true, useCreateIndex: true}).then(()=>{
    console.log('Connected to Database');
}).catch(err => {
    console.log('Could not connect to Database', err)
});

//REQUIRING ROUTES

const laptopRoutes = require('../Backend/routes/laptops');
const contactRoutes = require('../Backend/routes/contactForm');


//USING ROUTES
app.use('/', contactRoutes);
app.use('/laptops', laptopRoutes);

//APP LISTENER
app.listen(process.env.PORT || PORT, () => {
    console.log('Server ' + PORT + ' is up and running Captain')
})