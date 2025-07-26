// 
const path = require('path');
const express = require('express');

const app = express();

// Set up Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.status(200).render('index', {
    title: 'Home',
  });
})

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    title: 'About',
  });
});

app.get('/services', (req, res) => {
  res.status(200).render('services', {
    title: 'Services',
  });
})

app.use((req, res) => {
  res.status(404).render('error');
});

module.exports = app;


