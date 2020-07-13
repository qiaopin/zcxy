// let widthsb=document.body.clientWidth
// console.log(widthsb)
// if(widthsb<560){
//     $(".short").show()
//     $(".long").hide()
// }else{
//     $(".short").hide()
//     $(".long").show()
// }

// nav
// iframe的宽高设置
// var timeIframe;
// 	window.onload = function() {
// 		timeIframe = setTimeout(GetIframeStatus, 10);
// 	}
// 	function GetIframeStatus() {
// 		var iframe = document.getElementById("footerIframe");
// 		var iframeWindow = iframe.contentWindow;
// 		//内容是否加载完
// 		if (iframeWindow.document.readyState == "complete") {
// 			var iframeWidth, iframeHeight;
// 			//获取Iframe的内容实际宽度
// 			iframeWidth = iframeWindow.document.documentElement.scrollWidth;
// 			//获取Iframe的内容实际高度
// 			iframeHeight = iframeWindow.document.documentElement.scrollHeight;
// 			//设置Iframe的宽度
// 			iframe.width = iframeWidth;
// 			//设置Iframe的高度
// 			iframe.height = iframeHeight;
// 		} else {
// 			timeIframe = setTimeout(GetIframeStatus, 10);
// 		}
// 	}



    $(".about").mousemove(function(){
        $(".about ol").show()
    })
    $(".about").mouseout(function(){
        $(".about ol").hide()
    })
    $(".work").mousemove(function(){
        $(".work ol").show()
    })
    $(".work").mouseout(function(){
        $(".work ol").hide()
    })
    $(".news").mousemove(function(){
        $(".news ol").show()
    })
    $(".news").mouseout(function(){
        $(".news ol").hide()
    })
    $(".us").mousemove(function(){
        $(".us ol").show()
    })
    $(".us").mouseout(function(){
        $(".us ol").hide()
    })
    $(".zhaona").mousemove(function(){
        $(".zhaona ol").show()
    })
    $(".zhaona").mouseout(function(){
        $(".zhaona ol").hide()
    })
    
    
    // 业务领域
    $('.content-left>a:first-child').mouseover(function(){
        $('a.dx>div').css('background-color','#6bd2ff')
        $('.content-right>.dx').show()
        $('.content-right>.jz').hide()
        $('a.rj>div').css('background-color','rgba(173, 223, 248, 0.8)')
        $('a.jz>div').css('background-color','rgba(173, 223, 248, 0.8)')
        $('.content-right>.rj').hide()
    })
    
    $('.content-left>a:first-child').mouseout(function(){
        // $('a.dx>div').css('background-color','rgba(173, 223, 248, 0.8)')
    })
    
    $('.content-left>a:nth-child(2)').mouseover(function(){
        $('a.dx>div').css('background-color','rgba(173, 223, 248, 0.8)')
        $('a.jz>div').css('background-color','#6bd2ff')
        $('.content-right>.dx').hide()
        $('.content-right>.jz').show()
        $('a.rj>div').css('background-color','rgba(173, 223, 248, 0.8)')
        $('.content-right>.rj').hide()
    })
    
    $('.content-left>a:nth-child(2)').mouseout(function(){
        // $('a.jz>div').css('background-color','rgba(173, 223, 248, 0.8)')
    })
    
    $('.content-left>a:nth-child(3)').mouseover(function(){
        $('a.dx>div').css('background-color','rgba(173, 223, 248, 0.8)')
        $('a.jz>div').css('background-color','rgba(173, 223, 248, 0.8)')
        $('a.rj>div').css('background-color','#6bd2ff')
        $('.content-right>.dx').hide()
        $('.content-right>.jz').hide()
        $('.content-right>.rj').show()
    })

    // var returnBtn=document.createElement('a');
    // "background":"url(../image/first-page/returntop.png)"
    
   if(location.href.indexOf('index.html')==-1){
    $("body").append("<a>返回<br/>顶部</a>");
    $('body>a').css({"width":" 1rem","height":" 1rem","color":"#fff","font-size":".2rem","text-align":"center","padding-top":".17rem","z-index":"998","position":"fixed","right":".25rem","bottom":"6rem","background-color":"#333","border-radius":"50%","background-size":"cover","display":"none"});
    $('body>a').attr("id","return_top")
   }

   var obtn = document.getElementById('return_top');  //获取回到顶部按钮的ID
   var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
   var timer = null; //定义一个定时器
   var isTop = true; //定义一个布尔值，用于判断是否到达顶部

   window.onscroll = function(){         //滚动条滚动事件

       //获取滚动条的滚动高度
       var osTop = document.documentElement.scrollTop || document.body.scrollTop; 

       if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
               obtn.style.display = 'block';
       }else{         //否则隐藏
           obtn.style.display = 'none';
       }

       //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
       if(!isTop){     
           clearInterval(timer);
       }
       isTop = false;
   }

   obtn.onclick = function(){    //回到顶部按钮点击事件
       //设置一个定时器
       timer = setInterval(function(){
           //获取滚动条的滚动高度
           var osTop = document.documentElement.scrollTop || document.body.scrollTop;
           //用于设置速度差，产生缓动的效果
           var speed = Math.floor(-osTop / 6);
           document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
           isTop =true;  //用于阻止滚动事件清除定时器
           if(osTop == 0){
               clearInterval(timer);
           }
       },30);
   }










