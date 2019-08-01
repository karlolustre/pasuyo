const express = require('express');
const path= require('path');

const PORT = process.env.PORT || 3001;
const app = express();


// to serve static assets
app.use(express.static('views/app/build'));

// express connection to react app
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, './views/app/public/index.html'));

})

app.listen(PORT, function(){

    console.log(path);
    console.log(`Server now on port ${PORT}!`);
})