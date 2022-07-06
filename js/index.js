$(document).ready(function(){

		//스크롤바가 이동될때마가 스크롤위치값 나타내기
	// $(window).scroll(function(){
	// 	$("#txt").text($(this).scrollTop());
	// });

	//크롬최적화 안내............................................

	bb=true;
	$(".btn_close_c").click(function(){

		if(bb){
			$(this).stop(true,true).animate({marginTop:"-50px"},500); //close버튼
			$(".pop_box").stop(true,true).animate({marginTop:"-50px"},500); //popup내용
			$("#wrap").stop(true,true).animate({marginTop:"0"},500,function(){ //컨텐츠
				bb=false;
			});
		}

	});


	$(".pro1").click(function(){
		$(this).hide()
		$(".pro2").fadeIn("slow");
	});

	
	//스크롤 내려갈때 보이는 Top Fix Menu............................................
	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$(".topmenu_fix").css("margin-top","0px");
		}else{
			$(".topmenu_fix").css("margin-top","-80px")
		}

	});

		//오른쪽 퀵메뉴..............................................................

	$(".quick").hide();

	$(window).scroll(function(){

		if($(this).scrollTop()>=400){
			$(".quick").fadeIn();
		}else{
			$(".quick").fadeOut();
		}

	});

	$(window).scroll(function(){
		
		if($(this).scrollTop()>=400 && $(this).scrollTop()<1500){  
			$(".quick ul .btn1").find(">a>.dot").addClass("dothover");
			$(".quick ul .btn1").find(">a>.text_over").css({"display":"inline-block"});
			$(".skill .bar5").css({"width":"95%"});
			$(".skill .bar5").fadeIn(1500);
			$(".skill .bar6").css({"width":"85%"});
			$(".skill .bar6").fadeIn(1500);
			$(".skill .bar7").css({"width":"80%"});
			$(".skill .bar7").fadeIn(1500);
			$(".skill .bar8").css({"width":"90%"});
			$(".skill .bar8").fadeIn(1500);
		}else{
			$(".quick ul .btn1").find(">a>.dot").removeClass("dothover");
			$(".quick ul .btn1").find(">a>.text_over").css({"display":"none"});
			$(".skill .bar5").css({"width":"0%"});
			$(".skill .bar5").fadeIn(100);
			$(".skill .bar6").css({"width":"0%"});
			$(".skill .bar6").fadeIn(100);
			$(".skill .bar7").css({"width":"0%"});
			$(".skill .bar7").fadeIn(100);
			$(".skill .bar8").css({"width":"0%"});
			$(".skill .bar8").fadeIn(100);
		}
				
	});

	$(window).scroll(function(){
		
		if($(this).scrollTop()>=1500 && $(this).scrollTop()<2400){  
			$(".quick ul .btn2").find(">a>.dot").addClass("dothover");
			$(".quick ul .btn2").find(">a>.text_over").css({"display":"inline-block"});
		}else{
			$(".quick ul .btn2").find(">a>.dot").removeClass("dothover");
			$(".quick ul .btn2").find(">a>.text_over").css({"display":"none"});
		}
				
	});

	$(window).scroll(function(){
		
		if($(this).scrollTop()>=2400 && $(this).scrollTop()<3300){  
			$(".quick ul .btn3").find(">a>.dot").addClass("dothover");
			$(".quick ul .btn3").find(">a>.text_over").css({"display":"inline-block"});
			$(".personalwork .bar1-1").css({"width":"100%"});
			$(".personalwork .work1-1").fadeIn(2400);

		}else{
			$(".quick ul .btn3").find(">a>.dot").removeClass("dothover");
			$(".quick ul .btn3").find(">a>.text_over").css({"display":"none"});
			$(".personalwork .bar1-1").css({"width":"0%"});
			$(".personalwork .work1-1").fadeOut(100);
		}
				
	});

	$(window).scroll(function(){
		
		if($(this).scrollTop()>=3300 && $(this).scrollTop()<4200){  
			$(".quick ul .btn4").find(">a>.dot").addClass("dothover");
			$(".quick ul .btn4").find(">a>.text_over").css({"display":"inline-block"});
			$(".personalwork .bar4").css({"width":"100%"});
			$(".personalwork .work4").fadeIn(2400);
		}else{
			$(".quick ul .btn4").find(">a>.dot").removeClass("dothover");
			$(".quick ul .btn4").find(">a>.text_over").css({"display":"none"});
			$(".personalwork .bar4").css({"width":"0%"});
			$(".personalwork .work4").fadeOut(100);
		}
				
	});

	$(window).scroll(function(){
		
		if($(this).scrollTop()>=4200 && $(this).scrollTop()<5100){  
			$(".quick ul .btn6").find(">a>.dot").addClass("dothover");
			$(".quick ul .btn6").find(">a>.text_over").css({"display":"inline-block"});
		}else{
			$(".quick ul .btn6").find(">a>.dot").removeClass("dothover");
			$(".quick ul .btn6").find(">a>.text_over").css({"display":"none"});
		}
				
	});


	//웹디자인 탭메뉴...........................................................

	$(".panel>div:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기

	$(".tab li a").click(function(){
		$(".tab li a").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected");//새로 선택된 selected 클래스 생성
		$(".panel>div").hide();//기존의 보여진 내용 숨기기
		$($(this).attr("href")).show().hide().fadeIn();//새로 선택된 내용 href 연결된내용 보여주기
		return false; //a기능차단
	});

	//웹디자인 팝업창..............................................................

	/*리스트 이미지 클릭시 탭1*/
	$(".graphic_list1>li").click(function(){

		g_pop=$(this).index();
		$(".g_page1 span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
		$("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop1>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
		$("#popup1").stop(true,true).fadeIn(); //검정배경

	});



	/*오른쪽 상단 버튼 다음보기*/
	$(".right_btn1").click(function(){

		$("#popup1").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop<11){
			$(".pop1>li").eq(g_pop).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop++;

			$(".g_page1 span:nth-child(1)").text(g_pop+1);
			$(".pop1>li").eq(g_pop).stop(true,true).fadeIn();
		}

	});


	/*오른쪽 상단 버튼 이전보기*/
	$(".left_btn1").click(function(){

		$("#popup1").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop>0){
			$(".pop1>li").eq(g_pop).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop--;

			$(".g_page1 span:nth-child(1)").text(g_pop+1);
			$(".pop1>li").eq(g_pop).stop(true,true).fadeIn();
		}

	});


	/*오른쪽 상단 버튼 닫기*/
	$(".btn_close1").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#popup1").stop(true,true).fadeOut();
		$(".pop1>li").stop(true,true).hide();

	});

	/*리스트 이미지 클릭시 탭2*/
	$(".graphic_list2>li").click(function(){

		g_pop2=$(this).index();
		$(".g_page2 span:nth-child(1)").text(g_pop2+1); //오른쪽 상단 페이지 넘버
		$("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop2>li").eq(g_pop2).show(); //g_pop index에 해당하는 팝업보이기
		$("#popup2").stop(true,true).fadeIn(); //검정배경

	});



	/*오른쪽 상단 버튼 다음보기*/
	$(".right_btn2").click(function(){

		$("#popup2").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop2<7){
			$(".pop2>li").eq(g_pop2).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop2++;

			$(".g_page2 span:nth-child(1)").text(g_pop2+1);
			$(".pop2>li").eq(g_pop2).stop(true,true).fadeIn();
		}

	});


	/*오른쪽 상단 버튼 이전보기*/
	$(".left_btn2").click(function(){

		$("#popup2").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop2>0){
			$(".pop2>li").eq(g_pop2).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop2--;

			$(".g_page2 span:nth-child(1)").text(g_pop2+1);
			$(".pop2>li").eq(g_pop2).stop(true,true).fadeIn();
		}

	});


	/*오른쪽 상단 버튼 닫기*/
	$(".btn_close2").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#popup2").stop(true,true).fadeOut();
		$(".pop2>li").stop(true,true).hide();

	});

	//웹 퍼블리싱..............................................................

	//슬라이드___________________________________________

    $(".m3_num ul li").click(function(){
        $(".m3_num ul li").removeClass("selected"); //기존 숫자 
        $(this).addClass("selected");  //클릭한 숫자

        val=$(this).index(); //0,1,2,3,...
        $(".m3_1 ul").animate({"left":-370*val+"px"});  //왼쪽 텍스트 슬라이드
        $(".slide_show1 ul").animate({"left":-563*val+"px"});  //오른쪽 탭이미지 슬라이드
		
        return false;    
    });	
    
    
    //웹퍼블리싱 모달창___________________________________________
    
  		//각 메뉴를 클릭했을때....
	$(".m3_details").click(function(){
		$(this).next().show(); // 다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"});
		//클릭시 나오는 모달팝업창에도 스크롤바가 생성되므로 html스크롤바는 안보이게 함
		return false;
	});

	$(".pp_close").click(function(){
		$(".m3_pop").hide();
		$("html").css({"overflow-Y":"scroll"});
	});

	/*검정 배경 클릭시 닫기*/
	$(".m3_pop").click(function(){
		$(".m3_pop").hide();
		$("html").css({"overflow-y":"scroll"});
		return false;
	});


	//웹 반응형..............................................................

   $(".res_btn").click(function(){//각 메뉴를 클릭했을때
		$(this).next().show(); //다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"});//body스크롤없앰
		return false;
	});

	$(".m4_close").click(function(){//close눌렀을때
		$(".res_pop").hide(); //.pop을 안보이게함
		$("html").css({"overflow-y":"scroll"});//body스크롤생김	
	});

	/*검정 배경 클릭시 닫기*/
	$(".res_pop").click(function(){
		$("html").css({"overflow-y":"scroll"});
		$(".res_pop").hide();
		return false;
	});
 
	//웹 플랜..............................................................

	$(".plan_panel li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기

	$(".plan_tab li a").click(function(){
		$(".plan_tab li a").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected");//새로 선택된 selected 클래스 생성
		$(".plan_panel li").hide();//기존의 보여진 내용 숨기기
		$($(this).attr("href")).show().hide().fadeIn();//새로 선택된 내용 href 연결된내용 보여주기
		return false; //a기능차단
	});


	
});

