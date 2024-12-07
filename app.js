const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/userModel'); // Import the User model

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.post('/register', async (req, res) => {
  console.log("register")
    try {
        await User.register(new User({ username: req.body.username }), req.body.password);
        res.send('User registered successfully!');
    } catch (err) {
        res.send(err.message);
    }
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
}));

app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Welcome, ${req.user.username}`);
    } else {
        res.redirect('/login');
    }
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));

