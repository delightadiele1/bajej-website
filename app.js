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
    seoTitle: 'Bajej Group | Oil & Gas Pipeline Maintenance in Nigeria',
    seoDescription: 'Bajej Group specializes in onshore oil & gas pipeline construction, fabrication, and maintenance services across Nigeria.'
  });
})

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    title: 'About',
    seoTitle: 'About Bajej Group | Oil & Gas Pipeline Services',
    seoDescription: 'Learn about Bajej Group, a trusted oil & gas company providing onshore pipeline laying, leak repairs, facility upgrades, and maintenance solutions.'
  });
});

app.get('/services', (req, res) => {
  res.status(200).render('services', {
    title: 'Services',
    seoTitle: 'Our Services | Bajej Group - Pipeline Fabrication & Maintenance',
    seoDescription: 'Explore Bajej Group’s services: onshore oil & gas pipeline construction, leak repairs, valve installations, manifold upgrades, and facility maintenance.'
  });
})

app.get('/contact', (req, res) => {
  res.status(200).render('contact', {
    title: 'Contact',
    seoTitle: 'Contact Bajej Group | Oil & Gas Pipeline Experts',
    seoDescription: 'Get in touch with Bajej Group for oil & gas pipeline maintenance, fabrication, and facility upgrade services across Nigeria.'
  })
})

app.get('/projects', (req, res) => {
  res.status(200).render('projects', {
    title: 'Projects',
    seoTitle: 'Our Projects | Bajej Group - Oil & Gas Pipeline Solutions',
    seoDescription: 'See Bajej Group’s completed and ongoing oil & gas projects including pipeline installations, facility upgrades, and maintenance works across Nigeria.'
  })
})

// app.get('/team', (req, res) => {
//   res.status(200).render('team', {
//     title: 'Team',
//     seoTitle: 'Our Team | Bajej Group Oil & Gas Experts',
//     seoDescription: 'Meet the experienced professionals behind Bajej Group, driving innovation in oil & gas pipeline construction and maintenance.'
//   })
// })

app.get('/equipments', (req, res) => {
  res.status(200).render('equipments', {
    title: 'Equipments',
    seoTitle: 'Our Equipments | Bajej Group Oil & Gas Tools',
    seoDescription: 'Bajej Group supplies and procures high-quality oil & gas tools and equipment for pipeline fabrication, maintenance, and facility upgrades.'
  })
})

app.get('/company-profile', (req, res) => {
  res.status(200).render('profile', {
    title: "Profile",
    seoTitle: 'Company Profile | Bajej Group Oil & Gas Services',
    seoDescription: 'Bajej Group company profile: delivering reliable onshore oil & gas pipeline solutions, facility upgrades, and maintenance services in Nigeria.'
  })
})

app.use((req, res) => {
  res.status(404).render('error');
});

module.exports = app;


