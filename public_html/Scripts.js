/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document") .ready (function(){
    // This Allows me to input 
    $(".class").css("color", "yellow").css("font-style","italic").css("background-color", "gray") ;
    $('p:last').css("color", "").css("font-style","");
    
    $('p:gt(4)').css('border-style', 'solid');
    $("h1").bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click',showThePage);
    
     $('#show').css('visibility','hidden');
     
     $('#accordiom').accordion({header: "h4"});
     
     $('h3').css('background','orange');
     
     $('body').css('text-align', "center");
    
    
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#addAPara').bind('click', addAPara);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removeAPara').bind('click', removeAPara);

});

function hideThePage(){
    $('#show').css('visibility','visible');
    $('div').hide('slide', {}, 2500);
     $('#show').show('fold', {}, 2500);
     
}

     
function showThePage(){
    $('div').show('fold', {}, 2500);
      $('#show').hide('puff', {}, 2500);
     
}

function mouseOverMe(){
    $("h1").html("Hello my name is Edgar Cantero");
}

function mouseOutMe(){
    $("h1").html("My name is Edgar Cantero");
}


function changeToText(){
    $(".hi").text("<h6>Now I'm an h6</h6>");
}

//function changeToHtml(){
//    $(".changed").html("<h6>Now I'm an h6</h6>");
//}

function replaceWText(){
    $('#randPara').html('<h6>Now im an h6</h6>');
    }

function addAPara(){
    $('#randPara').append('<p> Another paragraph</p>');
}

function removeAPara(){
    $('#randPara p:last').remove();
}