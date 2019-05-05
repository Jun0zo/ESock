// 비동기로 json파일 불러오기 1. cup_leage  2.team 전체


//==============================. 변수 정의. =================================
var max = 3;
var index = 0, cup_list, team_list;
var is_scroll_state_up = 1;
var cur_section = -1, bef_section = -2;
var is_section_change = -1;

var cur_team_index_front = 0;
var cur_team_index_back = 4;


//==============================. 함수 정의. =================================
function getIndex(target){

	var targetR = target.parent();
	//alert ('? : ' + $('#team_img_list li').eq(0).html());
	for(var i = 0; i < ('#team_img_list li').length; i++){
		if( $('#team_img_list li').eq(i).html() === targetR.html())
			return i;
	}
}

function chkScrLoc (id, lev){
	//alert(id + " & " + lev);
	if($(document).scrollTop() > $(id).offset().top + lev)
		return 1;
	else 
		return 0;
}

function clearID(list){
	list.each(function (){
		 $(this).removeAttr('id');
	});
}

function hideAll(list){

	list.each(function(index, item){
		if(index >= 5){
			$(item).css({opacity : 0.0});
		}
	});
}

function imgSlide(x_pos_diff, to){

	if(to === 'L'){ //왼쪽으로 이동
		$('#team_img_list').animate({'margin-left' : "-=" + x_pos_diff}, 1000);
			for(var index=0; index<=5; index++){
				var cur_img = $('.team_img').eq(index + cur_team_index_front);
				if(index == 0)
					$(cur_img).css({opacity : 0.0});
				else if(index == 2)
					$(cur_img).removeAttr('id');
				else if(index == 3)
					$(cur_img).attr({id : 'team_img_middle'});
				else if(index == 5)
					$(cur_img).css({opacity : 1.0});
				
		}
		//$('.team_img').eq(index + cur_team_index_front - 1).css({opacity : 0.0});
		cur_team_index_front += 1;
	}

	else if(to === 'R'){ //오른쪽으로 이동
		$('#team_img_list').animate({'margin-left' : "+=" + x_pos_diff}, 1000);
			for(var index=0; index<=5; index++){
				var cur_img = $('.team_img').eq(index + cur_team_index_front);
				if(index == 1)
					$(cur_img).attr({id : 'team_img_middle'});
				else if(index == 2)
					$(cur_img).removeAttr('id');
				else if(index == 4)
					$(cur_img).css({opacity : 0.0});
				
			}
		//$('.team_img').eq(index + cur_team_index_front - 1).css({opacity : 1.0});
		cur_team_index_front -= 1;
	}
}

//============================================= 시작 부분 =============================================

$(document).ready(function() {

	//==============================. 데이터 전처리. =================================

	//------------------. json파일 import. ------------------
	$.getJSON('/data/cup_list.json', function(data){
		cup_list = data;
		$('.cup_image').attr({src :'/images/cup_icon/' + cup_list.cup[0].logo_file});
		$('#cup_pg_bar_1').animate({width: cup_list.cup[0].speed + '%'});
		$('#cup_pg_bar_2').animate({width: cup_list.cup[0].build + '%'});
		$('#cup_pg_bar_3').animate({width: cup_list.cup[0].skill + '%'});
	});
	$.getJSON('/data/team_list.json', function(data){
		team_list = data;
	});

	//------------------. team_img 부분 음영처리 ------------------
	hideAll( $('.team_img') );

	//==============================. 스크롤 시. =================================
	$(window).scroll( function() {

		//----------------. 메뉴바 고정. ----------------
		if( $(document).scrollTop() >  35){
			$('#menu_bar_id').addClass('menu_bar_fixed');
		} else{
			$('#menu_bar_id').removeClass('menu_bar_fixed');
		}

		//----------------. about글씨 애니메이션. ----------------
		var about_dc_Offset = $('#about').offset();
		if( $(document).scrollTop() > about_dc_Offset.top - 400 && $(document).scrollTop() < about_dc_Offset.top + 400 ){

			$('#about_describe').removeClass('slideout');
			$('#about_describe').addClass('slidein');
		}
		
		else{
			$('#about_describe').removeClass('slidein');
			$('#about_describe').addClass('slideout');
		}

		//alert(typeof $('.menu_items')[2]);
		//----------------.  about section 부분 li 색변경. ----------------
		//배열 접근 : alert($('.menu_items').toArray()[0] );
		if( chkScrLoc('#game', -300) ){
			cur_section = 4;
			if(cur_section != bef_section){
				clearID($('.menu_items'));
				bef_section = cur_section;
				var menu_name_game = $('.menu_items').toArray()[4];
				$(menu_name_game).attr({id : 'menu_bar_fixed_clicked'})
			}
			
		//----------------.  about section 부분 li 색변경. ----------------
		} else if( chkScrLoc('#team', -300) ){
			cur_section = 3;
			if(cur_section != bef_section){
				clearID($('.menu_items'));
				bef_section = cur_section;
				var menu_name_game = $('.menu_items').toArray()[3];
				$(menu_name_game).attr({id : 'menu_bar_fixed_clicked'})
			}
		//----------------.  about section 부분 li 색변경. ----------------
		} else if( chkScrLoc('#cup', -300) ){
			cur_section = 2;
			if(cur_section != bef_section){
				clearID($('.menu_items'));
				bef_section = cur_section;
				var menu_name_game = $('.menu_items').toArray()[2];
				$(menu_name_game).attr({id : 'menu_bar_fixed_clicked'})
			}
		//----------------.  about section 부분 li 색변경. ----------------
		} else if( chkScrLoc('#about', -300) ){
			cur_section = 1;
			if(cur_section != bef_section){
				clearID($('.menu_items'));
				bef_section = cur_section;
				var menu_name_game = $('.menu_items').toArray()[1];
				$(menu_name_game).attr({id : 'menu_bar_fixed_clicked'})
			}
		//----------------.  about section 부분 li 색변경. ----------------
		} else {
			//alert('no');
			cur_section = 0;
			if(cur_section != bef_section){
				clearID($('.menu_items'));
				bef_section = cur_section;
				var menu_name_game = $('.menu_items').toArray()[0];
				$(menu_name_game).attr({id : 'menu_bar_fixed_clicked'})
			}
		}
		
	});

	//==============================. 메뉴 클릭 시 애니메이션. =================================
	$('.menu_items').click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});


	//=============================  cup_list에서 화살표 클릭시 리그 정보 변경. =================================

	//----------------.  index 변경. ----------------
	$('.cup_image_change').click(function(event){
		event.preventDefault();
		var first = $('.cup_image_change')[0];
		var second = $('.cup_image_change')[1];

		if(event.target === first){
			if(index == 0)
				index = max-1;
			else
				index--;
		}
		else if(event.target === second){
			if(index == max-1)
				index = 0;
			else
				index++;
		}
		//----------------.  글자부분 변경. ----------------
		$('#league_name p').text(cup_list.cup[index].name);
		$('#country_name img').attr({
										src : '/images/country_icon/'+ cup_list.cup[index].country_file,
										style : 'width:230px; height:154px; margin:25px;'}
									);
		$('#country_name p').text(cup_list.cup[index].country);

		//----------------.  link파일 위치 변경. ----------------
		$('.cup_image').attr({src : '/images/cup_icon/' + cup_list.cup[index].logo_file});

		//----------------.  progress bar 정보 변경. ----------------
		$('#cup_pg_bar_1').animate({width : cup_list.cup[index].speed + '%'});
		$('#cup_pg_bar_2').animate({width : cup_list.cup[index].build + '%'});
		$('#cup_pg_bar_3').animate({width : cup_list.cup[index].skill + '%'});

	});

	$('.team_img').click(function(event){
		var first_li = $('#team_img_list li').eq(0 + cur_team_index_front);
		var first_img = $('.team_img').eq(0 + cur_team_index_front);
		var last_li = $('#team_img_list li').eq(4 + cur_team_index_front);
		var last_img = $('.team_img').eq(4 + cur_team_index_front);
		var x_pos_diff = $( $('.team_img').eq(1 + cur_team_index_front) ).position().left - $(first_img).position().left; //150.5
		alert(x_pos_diff);

		var clicked_index = getIndex($(event.target));
		var middle_index = 2+cur_team_index_front
		var index_diff = Math.abs(clicked_index - middle_index);

		if(clicked_index < middle_index){ //중간보다 왼쪽클릭
			imgSlide(300, 'R');
		}
		else if(clicked_index > middle_index){ //중간보다 오른쪽 클릭
			imgSlide(300, 'L');
		}
		else{

		}



	});


});	