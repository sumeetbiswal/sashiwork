(function ($, Drupal) {

  Drupal.behaviors.demoAccordnew = {

    attach: function attach(context, settings) {

  

var newDiv = $('<div><button id="openAll" style="margin: 22px;">Open All</button><button id="closeAll">Close All</button></div>');  

$( "#simple-accordion" ).prepend(newDiv);

 $('#closeAll').click(function(){

$('#simple-accordion .button-simple-accordion').removeClass('panel-active');

  $('#simple-accordion .ans-panel').css('max-height',' 0px');});

$('#openAll').click(function(){

	

  $('#simple-accordion .button-simple-accordion').addClass('panel-active');

  $('#simple-accordion .ans-panel').css('max-height',' 94px');

});



$(context).bind('scroll', function() {

    var currentTop = $(window).scrollTop();

    var elems = $('.scrollspy');

    elems.each(function(index){

      var elemTop 	= $(this).offset().top;

      var elemBottom 	= elemTop + $(this).height();

      if(currentTop >= elemTop && currentTop <= elemBottom){

        var id 		= $(this).attr('id');

        var navElem = $('a[href="#' + id+ '"]');

    navElem.parent().addClass('active').siblings().removeClass( 'active' );

      }

    })

}); 

$(".tabcontent-t").css('display','block');

