const express = require('express');
const path= require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');

//import routes
const routes = require('./routes');
app.use('/', routes)

//import models
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

//Middleware

// to serve static assets. in the future we might add images and videos please create static locations
app.use(express.static('views/app/build'));

// express connection to react app
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, './views/app/public/index.html'));
})




app.listen(PORT, function(){

    console.log(path);
    console.log(`Server now on port ${PORT}!`);
})