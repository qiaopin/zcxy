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






