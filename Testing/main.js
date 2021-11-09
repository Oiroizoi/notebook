const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log('listening')
});

app.get('/', (req, res) => {
  res.render('index', {
    bodytext: 'Inserted text'
  });
});

app.get('/page', (req, res) => {
  res.send('Different text');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/formdata', (req, res) => {
  let stringsObj = {
    input: req.body.string,
    textarea: req.body.string2
  };
  let stringsJSON = JSON.stringify(stringsObj);
  res.render('index', {
    bodytext: `${req.body.string}<br>${req.body.string2}`
  });
});
