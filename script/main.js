$(document).ready(function(){
  /* $(".mainmenu>li").hover(function(){
    $(this).find(".submenu").stop().slideToggle(500);
  }) */
  $(".mainmenu>li").hover(function(){
    $(".submenu").stop().slideToggle(500);
  })
  /* $(".mainmenu>li").mouseover(function(){
    $(".submenu").stop().slideDown(500);
  }).mouseout(function(){
    $(".submenu").stop().slideUp(500);
  }); */


  let index=0;
  const slider=$(".slider")
  function slide(){
    index=(index+1)%3;
    slider.animate({marginTop:index*-300},500)
  }
  setInterval(slide,3000)
  
  $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
  });
	
	
	$(".notice ul > li:first").click(function(){
		$("#popup_area").addClass("active");
	});
	$("#popup_area .btn").click(function(){
		$("#popup_area").removeClass("active");
	})

});