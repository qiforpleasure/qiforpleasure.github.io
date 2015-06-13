    $(function(){

      $("#filters a").bind('click',function(){
          $(".caption").hide();
      });
       
		//UI
		 $("#u1").click(function() {
            $("#mainpage").hide();
            $("#ui1").show();
            $("#ui1_header").show();
        });
		 $("#u2").click(function() {
            $("#mainpage").hide();
            $("#ui2").show();
        });
		$("#u3").click(function() {
            $("#mainpage").hide();
            $("#ui3").show();
        });
		 $("#u4").click(function() {
            $("#mainpage").hide();
            $("#ui4").show();
        });
		$("#u5").click(function() {
            $("#mainpage").hide();
            $("#ui5").show();
        });
		 $("#u6").click(function() {
            $("#mainpage").hide();
            $("#ui6").show();
        });
		 $("#u7").click(function() {
            $("#mainpage").hide();
            $("#ui7").show();
        });
		 $("#u8").click(function() {
            $("#mainpage").hide();
            $("#ui8").show();
        });
       $("#u9").click(function() {
            $("#mainpage").hide();
            $("#ui9").show();
        });
         $("#u10").click(function() {
            $("#mainpage").hide();
            $("#ui10").show();
        });
              $("#u11").click(function() {
            $("#mainpage").hide();
            $("#ui11").show();
        });
    
		

		
		//web
		 $("#w1").click(function() {
            $("#mainpage").hide();
            $("#web1").show();
        });
     $("#w2").click(function() {
            $("#mainpage").hide();
            $("#web2").show();
        });
		 $("#w3").click(function() {
            $("#mainpage").hide();
            $("#web3").show();
        });
		
   $("#w6").click(function() {
            $("#mainpage").hide();
            $("#web6").show();
        });
     $("#w7").click(function() {
            $("#mainpage").hide();
            $("#web7").show();
        });
		
		//motion
		 $("#o1").click(function() {
            $("#mainpage").hide();
            $("#motion1").show();
        });
		 $("#o2").click(function() {
            $("#mainpage").hide();
            $("#motion2").show();
        });
		 $("#o3").click(function() {
            $("#mainpage").hide();
            $("#motion3").show();
        });
		
		$("#o4").click(function() {
            $("#mainpage").hide();
            $("#motion4").show();
        });
		$("#o5").click(function() {
            $("#mainpage").hide();
            $("#motion5").show();
        });
		$("#o6").click(function() {
            $("#mainpage").hide();
            $("#motion6").show();
        });
		
		
		
		//infographic
		 $("#i1").click(function() {
            $("#mainpage").hide();
            $("#info1").show();
        });
		 $("#i2").click(function() {
            $("#mainpage").hide();
            $("#info2").show();
        });
     $("#i3").click(function() {
            $("#mainpage").hide();
            $("#info3").show();
        });
		//graphic
		 $("#g1").click(function() {
            $("#mainpage").hide();
            $("#graphic1").show();
        });
		$("#g2").click(function() {
            $("#mainpage").hide();
            $("#graphic2").show();
        });
		$("#g3").click(function() {
            $("#mainpage").hide();
            $("#graphic3").show();
        });
		$("#g4").click(function() {
            $("#mainpage").hide();
            $("#graphic4").show();
        });
        $("#g6").click(function() {
            $("#mainpage").hide();
            $("#graphic6").show();
        });
		//imaging
	    $("#pic2").click(function() {
            $("#mainpage").hide();
            $("#Imaging1").show();
        });
	    $("#pic3").click(function() {
            $("#mainpage").hide();
            $("#Imaging2").show();
        });
		 $("#pic4").click(function() {
            $("#mainpage").hide();
            $("#Imaging3").show();
        });
		 $("#pic5").click(function() {
            $("#mainpage").hide();
            $("#Imaging4").show();
        });
		$("#pic6").click(function() {
            $("#mainpage").hide();
            $("#Imaging5").show();
        });
		$("#pic7").click(function() {
            $("#mainpage").hide();
            $("#Imaging6").show();
        });
		//drawing
		$("#pic8").click(function() {
            $("#mainpage").hide();
            $("#drawing1").show();
        });
		$("#pic9").click(function() {
            $("#mainpage").hide();
            $("#drawing2").show();
        });
		$("#pic10").click(function() {
            $("#mainpage").hide();
            $("#drawing3").show();
        });
		
        $(".subpage").hide();


  	//move the image in pixel
	var move = 0;
	
	//zoom percentage, 1.2 =120%
	//var zoom = 1;

	//On mouse over those thumbnail
	$('.item').hover(function() {
		
		//Set the width and height according to the zoom percentage
		width = $('.element').width() ;
		height = $('.element').height() ;
		
		//Move and zoom the image
		//$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
		
		//Display the caption
		$(this).find('div.caption').stop(false,true).fadeIn(200);
	},
	function() {
		//Reset the image
		//$(this).find('img').stop(false,true).animate({'width':$('.item').width(), 'height':$('.item').height(), 'top':'0', 'left':'0'}, {duration:100});	

		//Hide the caption
		$(this).find('div.caption').stop(false,true).fadeOut(200);
	})
// 




////////////////////////tranisition js

      
      var $container = $('#container');

      $container.isotope({
        itemSelector : '.element'
      });
      
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');
		   

      $optionLinks.click(function(){
          $("#mainpage").show();
          $(".subpage").hide();
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
	  
	  
///////////////////////////////////////////////////

$(function(){
    
    var $container = $('#container');
    
    
      // add randomish size classes
      $container.find('.element').each(function(){
        var $this = $(this),
            number = parseInt( $this.find('.number').text(), 10 );
        if ( number % 7 % 2 === 1 ) {
          $this.addClass('width2');
        }
        if ( number % 3 === 0 ) {
          $this.addClass('height2');
        }
      });
    
    $container.isotope({
      itemSelector : '.element',
      // disable resizing
      resizable: false,
      // set columnWidth to a percentage of container width
      masonry: {
        columnWidth: $container.width() / 20
      },
      getSortData : {
        symbol : function( $elem ) {
          return $elem.attr('data-symbol');
        },
        category : function( $elem ) {
          return $elem.attr('data-category');
        },
        number : function( $elem ) {
          return parseInt( $elem.find('.number').text(), 10 );
        },
        weight : function( $elem ) {
          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
      }
    });
    
    // update columnWidth on window resize
    $(window).smartresize(function(){
      $container.isotope({
        // set columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / 20
        }
      });
    });
      
    
    /*  var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });*/


    
      $('#insert a').click(function(){
        var $newEls = $( fakeElement.getGroup() );
        $container.isotope( 'insert', $newEls );

        return false;
      });

      $('#append a').click(function(){
        var $newEls = $( fakeElement.getGroup() );
        $container.append( $newEls ).isotope( 'appended', $newEls );

        return false;
      });


    
    /*  // change size of clicked element
		$container.delegate( '.element', 'click', function(){
        $(this).toggleClass('large');
        $container.isotope('reLayout');
      });*/

      // toggle variable sizes of all elements
      $('#toggle-sizes').find('a').click(function(){
        $container
          .toggleClass('variable-sizes')
          .isotope('reLayout');
        return false;
      });


    var $sortBy = $('#sort-by');
    $('#shuffle a').click(function(){
      $container.isotope('shuffle');
      $sortBy.find('.selected').removeClass('selected');
      $sortBy.find('[data-option-value="random"]').addClass('selected');
      return false;
  
    });	 
  });

$(".sublink").click(function() {
	$("#"+$(this).attr("bind")).trigger("click");
});

    });(window.jQuery);