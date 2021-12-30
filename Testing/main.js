const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

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

app.get('/alt', (req, res) => {
  res.send('Different text');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/formdata', (req, res) => {
  res.render('index', {
    bodytext: `${req.body.string}<br>${req.body.string2}`
  });
});

let obj = {
  string: 'value',
  number: 10
};
obj.number2 = 100;
let key = 'string';
obj[key] = 'newValue';
for (let property in obj) console.log(`${property}: ${obj[property]}`);

let arr = ['first', 'second', 'third'];
arr.push('fourth');
for (let item of arr) console.log(item);

let stringObj = JSON.stringify(obj);
fs.writeFile('data.json', stringObj, () => console.log('Wrote to file'));

app.get('/jsondata', (req, res) => {
  let fileData = fs.readFileSync('data.json', 'utf8');
  let parsedData = JSON.parse(fileData);
  res.render('jsondata', {
    data: parsedData
  });
});
