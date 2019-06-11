var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');
var $ = require('jquery');

app.set('view engine', 'ejs');
//app.set('.index.ejs', './view'); 
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}) );


app.get('/', function(req, res){
	var db = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'Js58195138~',
		port:3306,
		database:'Esock'
	});

	db.connect();

	console.log('database!');
	db.query("SELECT * FROM player", function(err, epl_player_list){
		if(err)
			console.log(err);
			res.render('index.ejs', {title:'jo2on', EPL_player_list : epl_player_list});
	})
	db.end();
	
	console.log('complete!');
});
 
app.get('/player/:team_name/:team', function(req, res) {
	console.log('post successs');
	console.log(req.params.team_name , req.params.team);
	res.redirect();
})

app.get('/player/:team_name', function(req, res) {
	var db = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'Js58195138~',
		port:3306,
		database:'Esock'
	});

	if (req.params.team_name == '*')
		var query = `SELECT * FROM player`;
	else
		var query = `SELECT * FROM player WHERE team_name = "${req.params.team_name.replace(' ','_')}"`;
	
	console.log(query);
	db.query(query, function (err, player_infos){
		if(err)
			console.log(err);
		res.send(player_infos);
	})
	db.end();
	console.log("/player !!! ");
})

app.get('/team/:team_name', function(req, res) {

	var db = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'Js58195138~',
		port:3306,
		database:'Esock'
	});

	db.query(`SELECT * FROM team WHERE name = "${req.params.team_name.replace(' ','_')}"`, function(err, team_infos){
		if(err)
			console.log(err);
		console.log(team_infos);
		res.send(team_infos);
	});

	db.end();
	console.log("/team !!! ");
});

app.listen(2000, function(){
  console.log('================== Server Start ==================');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('==================================================');
});

const fs = require('fs');

//let cup_list_raw = fs.readFileSync('cup_list.json');
//let cup_list = JSON.parse(cup_list_raw);


app.set('view engine', 'ejs');
//app.set('.index.ejs', './view');;

//var rawdata = fs.readFileSync('cup_list.json');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.ejs', {title:'jo2on'});
  console.log('complete!');
});

app.get('/cup.json', function(data){
  console.log("cup_list.json111");
});



