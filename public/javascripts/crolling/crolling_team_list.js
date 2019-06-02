var request = require('request');
var cheerio = require('cheerio');


var player_name = "아스날";
var mode = 0;
var url = encodeURI("https://ko.wikipedia.org/wiki/" + player_name);

request(url, function(err, res, html){
	if(!err)
		var $ = cheerio.load(html);
	else
		console.log("There are no webpage !!");

	var v_card = $('.infobox.vcard tbody');
	//========= 개인 정보 =========
	var name = v_card.children().eq(2);
	var birth = v_card.children().eq(3);
	var from = v_card.children().eq(4);
	var height = v_card.children().eq(5);
	var position = v_card.children().eq(6);
	// var_name.text().trim().strip('\n')[0] , [1];
	//var v_card = $('.infobox.vcard tbody tr:nth-child(2)').text().trim().split('\n');

	//========= 클럽 정보 =========
	var cur_team = v_card.children().eq(7);
	//var cur_team = 
	console.log();

})