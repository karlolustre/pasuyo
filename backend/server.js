const express = require('express');

const app = express();

const passport = require('passport')

const jwt = require('jsonwebtoken')

require('./passport')

//for cross-origin requests
const cors = require('cors');
app.use(cors())

//access data in requests
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

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


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Rabbit is in Rabbit Hole ${port}`);
})