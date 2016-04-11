Template.index.onRendered( () => {
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});

	$(document).ready(function() {  
	    //Enable swiping...
	    $(".carousel-inner").swipe( {
	        //Generic swipe handler for all directions
	        swipeLeft:function(event, direction, distance, duration, fingerCount) {
	            $(this).parent().carousel('next'); 
	        },
	        swipeRight: function() {
	            $(this).parent().carousel('prev'); 
	        },
	        //Default is 75px, set to 0 for demo so any distance triggers swipe
	        threshold:0
	    });
	});

	$('.grid').isotope();

	(function($){
		$(document).ready(function(){
			// Animations
			//-----------------------------------------------
			if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
				$("[data-animation-effect]").each(function() {
					var $this = $(this),
					animationEffect = $this.attr("data-animation-effect");
					if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
						$this.appear(function() {
							setTimeout(function() {
								$this.addClass('animated object-visible ' + animationEffect);
							}, 400);
						}, {accX: 0, accY: -130});
					} else {
						$this.addClass('object-visible');
					}
				});
			};

			// Isotope filters
			//-----------------------------------------------
			if ($('.isotope-container').length>0) {
				$(window).load(function() {
					$('.isotope-container').fadeIn();
					var $container = $('.isotope-container').isotope({
						itemSelector: '.isotope-item',
						layoutMode: 'masonry',
						transitionDuration: '0.6s',
						filter: "*"
					});
					// filter items on button click
					$('.filters').on( 'click', 'ul.nav li a', function() {
						var filterValue = $(this).attr('data-filter');
						$(".filters").find("li.active").removeClass("active");
						$(this).parent().addClass("active");
						$container.isotope({ filter: filterValue });
						return false;
					});
				});
			};

			//Modal
			//-----------------------------------------------
			if($(".modal").length>0) {
				$(".modal").each(function() {
					$(".modal").prependTo( "body" );
				});
			}

		}); // End document ready
	})(this.jQuery);
});