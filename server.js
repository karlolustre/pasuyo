const express = require('express');
const path= require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
<<<<<<< HEAD

//import routes
const routes = require('./routes');
app.use('/', routes)
=======
const bodyParser = require('body-parser');

const databaseUrl = process.env.DATABASE_URL || "mongodb+srv://karlolustre:karlolustre@cluster0-6xkfx.mongodb.net/rabbit?retryWrites=true&w=majority";
mongoose.connect(databaseUrl, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('Run Rabbit Run');
})

app.use(bodyParser.json());

//routes
const task = require('./routes/task');
app.use('/task', task);

const index = require('./routes/index');
app.use('/', index);

const auth = require('./routes/auth');
app.use('/auth', auth);

app.use((err, req, res, next) => {
	res.status(422).send({error : err.message})
})
>>>>>>> d64f48dc6e498bf3d2e751ea1829d33bd3026997

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