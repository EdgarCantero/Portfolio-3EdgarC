/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document") .ready (function(){
    $(".class").css("color", "yellow").css("font-style","italic").css("background-color", "gray") ;
    $('p:last').css("color", "blue").css("font-style","");
    
    $('p:gt(4)').css('border-style', 'solid');
    $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
});
function mouseOverMe(){
    $("h1");
}

function mouseOutMe(){
    $("h1").html("TOLD YOU DON'T TOUCH")
}