var express = require('express');
var app = express();

const fs = require('fs');

//let cup_list_raw = fs.readFileSync('cup_list.json');
//let cup_list = JSON.parse(cup_list_raw);


app.set('view engine', 'ejs');
//app.set('.index.ejs', './view');

//var rawdata = fs.readFileSync('cup_list.json');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.ejs', {title:'jo2on'});
  console.log('complete!');
});

app.get('/cup.json', function(data){
  console.log("cup_list.json111");
});


app.listen(8080, function(){
  console.log('hello ejs');
  console.log('app.js middle');
});

