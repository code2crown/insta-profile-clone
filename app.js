const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');


// View engine set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files serve
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/user/:username', (req, res) => {
    const {username} = req.params;

    const userData = data[username];



    if(userData) {
        res.render('profile', {userData});
    } else {
        res.render('notfound', {username});
    }
});



// Server Start 
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});