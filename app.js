require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;

//TODO: require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servidro contenido estatico //middleware
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Weimar Alarcon',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Weimar Alarcon',
        titulo: 'Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Weimar Alarcon',
        titulo: 'Elementos'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile( __dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile( __dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});