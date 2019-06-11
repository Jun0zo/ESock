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
	console.log(req.params.team_name);

	db.query(`SELECT * FROM player WHERE team_name = "${req.params.team_name.replace(' ','_')}"`, function(err, player_infos){
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

app.listen(8800, function(){
  console.log('================== Server Start ==================');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('=                                                =');
  console.log('==================================================');
});