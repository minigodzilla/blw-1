//----------------------------------------------------------------------------//
// Hero Gallery                                                               //
//----------------------------------------------------------------------------//
$(function()
{
	if ( $('body').hasClass( 'home' ) ) {

		function doTransition() {
			$(gallery + ' .bs-dots .bs-dot').removeClass('bs-active');
			$(gallery + ' .bs-dots .bs-dot' + ":eq(" + index + ")").addClass('bs-active');

			$(images).removeClass('bs-active bs-rear');
			$(images + ":eq(" + index + ")").addClass('bs-active');
			$(images + ":eq(" + rear + ")").addClass('bs-rear');
			if (++index === count) index = 0;
			if (++rear === count) rear = 0;
		}

		var gallery = ".home .bs-hero .bs-slide";	// gallery container
		var images = gallery + " .bs-image";	// image selector
		var interval = 4000;					// milliseconds between transitions
		var index = 0;							// starting index
		var count = $(images).length			// image count
		var rear = (count - 1)					// index of image behind active image

		setTimeout(function() {
			$('.bs-hero').addClass('bs-gallery-active');
		}, interval);

		setInterval(function() {
			doTransition();
		}, interval);

		$(gallery).prepend("<div class='bs-dots'></div>");

		$(images).each(function(i) {
			$(gallery + " .bs-dots").append("<div class='bs-dot'></div>");
		});

		doTransition();

	}
});

//----------------------------------------------------------------------------//
// Nav                                                                        //
//----------------------------------------------------------------------------//
$(function()
{

	$('.bs-nav-toggle').on('click', function() {

		$('body').toggleClass('bs-nav-open');

		$('header').on('mouseleave', function() { 
			setTimeout(function() {
				if ($('nav').is(':not(:hover)')) {
					$('body').removeClass('bs-nav-open');
				}
			},4000);
		});

	});

	window.onhashchange = function() {
		$('body').removeClass("bs-nav-open");
	}

	$('body').addClass('bs-header-initial');

	var lastScrollTop = 0;

	$(window).scroll(function() {

		var st = $(this).scrollTop();
		
		if (st > lastScrollTop && st > 100) {
			$('body').removeClass('bs-header-visible');
		} else {
			$('body').addClass('bs-header-visible');
		}

		if (st > 0){
			$('body').removeClass('bs-header-initial');
		} else {
			$('body').addClass('bs-header-initial');
		}

		lastScrollTop = st;

	});

});


//----------------------------------------------------------------------------//
// Parallax                                                                   //
//----------------------------------------------------------------------------//
$(function()
{

	var rellax = new Rellax('.rellax');

});

//----------------------------------------------------------------------------//
// Video Container                                                            //
//----------------------------------------------------------------------------//
$(function()
{

	$('.bs-video-container .bs-video-poster').on('click', function() {

		var container = $(this).parent();
		var frame = container.find('.bs-video-frame');
		var poster = container.find('.bs-video-poster');

		container.addClass('bs-video-open');
		frame.prepend('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/468269570?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');

	});

});

//----------------------------------------------------------------------------//
// Owl Carousels                                                              //
//----------------------------------------------------------------------------//
$(function()
{
	
	var isMobile = function () {
		if ($('.bs-mobile-detect').is(':visible'))
			return true;
	}

	if (isMobile()) {
		$('.bs-season-carousel .bs-slide').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			items: 1
		});

		$("<div class='bs-mobile-heading bs-summer'><div class='bs-icon-label'><svg class='bs-icon bs-svg' viewBox='0 0 28.5 28.5'><path d='m28.5 14.7v-1h-3.9c-.1-2.4-1.1-4.7-2.7-6.5l2.8-2.8-.7-.6-2.8 2.8c-1.8-1.6-4.1-2.6-6.5-2.7v-3.9h-1v3.9c-2.4.1-4.6 1.1-6.4 2.7l-2.8-2.8-.7.7 2.8 2.8c-1.6 1.8-2.6 4-2.7 6.4h-3.9v1h3.9c.1 2.4 1.1 4.7 2.7 6.5l-2.8 2.8.7.7 2.8-2.8c1.8 1.6 4.1 2.6 6.5 2.7v3.9h1v-3.9c2.4-.1 4.7-1.1 6.5-2.7l2.8 2.8.7-.7-2.8-2.8c1.6-1.8 2.6-4.1 2.7-6.5zm-14.3 8.9c-5.2 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3 9.3 4.2 9.3 9.3c.1 5.1-4.1 9.3-9.3 9.3'/></svg><div class='bs-label'>SUMMER</div></div></div>").insertBefore('.bs-season-carousel .bs-slide-summer')
		$("<div class='bs-mobile-heading bs-fall'><div class='bs-icon-label'><svg class='bs-icon bs-svg' viewBox='0 0 30.6 34.5'><path d='m30.6 18.3-1.8-.1c-.6 0-1.1-.1-1.7-.3.4-1.6 1.1-3.1 1.9-4.5l.6-1.2-1.3.3c-1.1.3-2.3.5-3.4.6-.1 0-.1 0-.2 0-.3-.8-.5-1.7-.7-2.6l-.2-1-3.5 2.9 1-7.4-1.1.8c-.8.6-1.6 1-2.5 1.3-.8-1.5-1.4-3.1-1.8-4.7l-.6-2.4-.6 2.3c-.3 1.6-.9 3.2-1.7 4.7-.9-.3-1.8-.7-2.5-1.3l-1.2-.8 1 7.4-3.6-2.9-.2 1c-.1.9-.4 1.8-.7 2.6 0 0-.1 0-.2 0-1.1-.1-2.3-.3-3.4-.6l-1.2-.2.6 1.2c.8 1.4 1.4 2.9 1.9 4.5-.5.2-1.1.3-1.7.3l-1.8.1 1.5 1c2.5 1.6 4.8 3.4 7.1 5.3-.2.4-.6.8-.9 1.2l-1.4 1.5 8.4-2.1c.3 4.6 2.9 9.3 6.5 9.3v-1.2c-2.9 0-5-4.1-5.3-8.1l8.4 2.1-1.4-1.5c-.4-.4-.7-.8-.9-1.3 2.3-1.9 4.7-3.6 7.1-5.3zm-9.8 6.1c0 .3.1.6.2.8l-4.7-1.2 4.5-3.9-.5-.6-4.7 4v-10h-.6v10.2l-4.7-4-.5.6 4.5 3.9-4.7 1.2c.1-.2.2-.5.2-.8s0-.8-6.4-5.2c.3-.1.7-.2 1-.5.3-.4.8-.9-1.1-4.9.8.2 1.6.3 2.4.3.4 0 .7-.1 1-.3.4-.7.7-1.5.8-2.3l4.3 3.5-1-7.8c.7.5 1.5.7 2.3.8.3 0 1.1-.1 2.2-3.6 1.1 3.5 1.9 3.6 2.2 3.6h.1c.8-.1 1.5-.4 2.2-.8l-1 7.8 4.3-3.5c.1.8.4 1.6.8 2.3.3.2.7.3 1 .3.8 0 1.6-.1 2.4-.3-2 4-1.4 4.5-1.1 4.8.3.2.6.4 1 .5-6.4 4.3-6.4 4.8-6.4 5.1'/></svg><div class='bs-label'>FALL</div></div></div>").insertBefore('.bs-season-carousel .bs-slide-fall')
		$("<div class='bs-mobile-heading bs-winter'><div class='bs-icon-label'><svg class='bs-icon bs-svg' viewBox='0 0 25.1 28.5'><path d='m23.7 17.3-.3-.9-3.8 1.3-4.7-2.7c.2-.5.2-1.1 0-1.6l4.6-2.7 3.8 1.3.3-.9-3-1 4.5-2.6-.5-.8-4.5 2.6.6-3.1-1-.2-.7 3.9-4.6 2.7c-.4-.4-.8-.7-1.4-.8v-5.3l3-2.6-.6-.7-2.4 2.1v-5.3h-1v5.2l-2.3-2.1-.6.7 3 2.6v5.3c-.5.1-1 .4-1.4.8l-4.6-2.6-.8-3.9-1 .2.7 3.1-4.5-2.6-.5.8 4.5 2.6-3 1.1.3.9 3.8-1.3 4.6 2.7c-.2.5-.2 1 0 1.5l-4.6 2.7-3.8-1.3-.3.9 3 1-4.5 2.6.5.8 4.5-2.5-.6 3.1 1 .2.7-3.9 4.6-2.7c.4.4.8.7 1.4.8v5.3l-3 2.6.6.7 2.4-2.1v5.2h1v-5.2l2.4 2.1.6-.7-3-2.6v-5.3c.5-.1 1-.4 1.4-.8l4.6 2.7.7 3.9 1-.2-.6-3.1 4.5 2.6.5-.8-4.5-2.6zm-11.1-1.7c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3c0 .7-.6 1.3-1.3 1.3'/></svg><div class='bs-label'>WINTER</div></div></div>").insertBefore('.bs-season-carousel .bs-slide-winter')
		$("<div class='bs-mobile-heading bs-summer'><div class='bs-icon-label'><svg class='bs-icon bs-svg' viewBox='0 0 25.8 26.6'><path d='m24.6.5-.1-.5-.5.1c-.4.1-8.9 2.6-12 7.6-.2.3-.3.5-.4.8-1.9-.8-4-1.1-6.1-1.1-1.7.1-3.3.2-5 .6l-.5.1.1.5c.1.3 1.4 7.8 5.5 10.9 1 .8 2.3 1.2 3.6 1.2 1.9-.1 3.6-.7 5.2-1.8.7 2.5.5 5.1-.5 7.4l.9.4c1.1-2.5 1.3-5.4.6-8.1.6.1 1.2.1 1.7.1 2.5 0 5.9-.7 7.6-4.1 2.6-5.3 0-13.8-.1-14.1m-15.4 19.1c-1.1 0-2.1-.3-3-1-3.2-2.4-4.6-8-5-9.7 1.4-.2 2.9-.4 4.4-.4 2.3-.1 4.5.4 6.5 1.4 2.8 1.7 2.6 5.2 2.3 6.9-1-1.8-2.8-4.1-8.4-5.4l-.2.6c6 1.4 7.3 3.7 8.3 5.6-1.4 1.2-3.1 1.8-4.9 2m14.5-5.4c-1.4 2.9-4.4 3.5-6.7 3.5-.6 0-1.2 0-1.8-.1.3-1.2.4-2.4.3-3.6.7-2.6 2.2-4.9 4.3-6.6l-.4-.5c-1.9 1.5-3.4 3.5-4.2 5.8-.4-1.5-1.3-2.8-2.6-3.6 0 0-.1 0-.1-.1.1-.3.2-.5.4-.8 2.4-4 9-6.4 10.9-7 .5 1.9 2 8.7-.1 13'/></svg><div class='bs-label'>SPRING</div></div></div>").insertBefore('.bs-season-carousel .bs-slide-spring')
	}

	if (!isMobile()) {
		$('.coming-soon .bs-season-carousel').owlCarousel({
			nav: false,
			dots: false,
			items: 1
		}).on("translated.owl.carousel", function() {
			var seasonsHeader = $('.bs-seasons-nav');
			var thisCarousel = $(this).find(".owl-stage");
			var activeSlide = thisCarousel.find(".active .bs-slide").attr("data-slide");
			seasonsHeader.attr("data-active-slide", activeSlide);
		});

		$('.coming-soon .bs-reasons-grid .bs-grid-item').on('click', function() {
			event.preventDefault()
			var slide = $(this).attr('data-to-slide');
			$('.bs-carousel').trigger('to.owl.carousel', [slide, 200, true]);
		});

		$('.coming-soon .bs-seasons-nav .bs-item').on('click', function() {
			event.preventDefault()
			var slide = $(this).attr('data-to-slide');
			var seasonsHeader = $('.bs-seasons-nav');
			$('.bs-season-carousel').trigger('to.owl.carousel', [slide, 200, true]);
			seasonsHeader.attr("data-active-slide", slide);
		});

		$('.bs-carousel').owlCarousel({
			nav: true,
			dots: false,
			items: 1
		});
	}

});

//----------------------------------------------------------------------------//
// Register Form                                                              //
//----------------------------------------------------------------------------//
$(function()
{

	$('.bs-select').on('change',function() {

		$(this).addClass('bs-used');

	});

	$('.bs-form-toggle-option').on('click', function() {

		var value = $(this).attr('data-value');

		$('.bs-form-toggle-input').attr('value', value);

	});


	$('.bs-form-check-span').on('click', function() {

		$('input#Custom1').trigger('click');

	});


	////////////////////////////////////////////////////////////////////////////////

	var $form              = $('#bs-register-form');
	var $inputs            = $form.find ('.form-control');
	var $email             = $form.find ('.form-control[name=Email]');
	var $button            = $form.find ('.bs-btn-submit');
	var errorState         = false;

	////////////////////////////////////////////////////////////////////////////////

	function isEmail(email) {

		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!regex.test(email))
		{
			return false;
		}

		else
		{
			return true;
		}
	}

	$inputs.blur (function()
	{
		if (!$(this).val())
		{
			$(this).removeClass ('is-valid').addClass ('is-invalid');
		}

		else
		{
			$(this).removeClass ('is-invalid').addClass ('is-valid');
		}
	});

	$email.blur (function()
	{
		if (!isEmail ($(this).val()))
		{
			$(this).removeClass ('is-valid').addClass ('is-invalid');
		}

		else
		{
			$(this).removeClass ('is-invalid').addClass ('is-valid');
		}

	});

	$form.submit (function(e)
	{
		// prevent default submit behaviour
		e.preventDefault();

		// reset error state
		errorState = false;

		// check for empty fields
		$inputs.each (function()
		{
			if (!$(this).val())
			{
				$(this).removeClass ('is-valid').addClass ('is-invalid');
				errorState = true;
			}

			else
			{
				$(this).removeClass ('is-invalid').addClass ('is-valid');
			}
		});

		// check whether email is valid
		if (!isEmail ($email.val()))
		{
			$email.removeClass ('is-valid').addClass ('is-invalid');
			errorState = true;
		}

		else
		{
			$email.removeClass ('is-invalid').addClass ('is-valid');
		}

		// if form has errors
		if (errorState)
			return false;

		// now we do ajax
		// get form
		var form = $('#bs-register-form')[0];

		// create an FormData object 
		var data = new FormData(form);

		// prevent duplicate submissions
		$form.find('.bs-btn-submit').prop('disabled', true);

		// do a barrel roll
		$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
			url: "/register.php",
			data: data,
			processData: false,
			contentType: false,
			cache: false,
			timeout: 800000,
			success: function (data) {

				$form.addClass('bs-success');

			},
			error: function (e) {

				console.log("ERROR : ", e);

				$form.addClass('bs-error');

			}
		});

	});

});

//----------------------------------------------------------------------------//
// ScrollMagic Animation incl. Lazy Load                                      //
//----------------------------------------------------------------------------//
$(function()
{

	function lazyLoad() {

		$('.bs-lazy').each(function () {

			var $this = $(this);

			new ScrollMagic.Scene
			({
				triggerElement: this,
				triggerHook: 1,
				offset: -100
			})
			.on("enter", function () {
				$this.removeClass('bs-lazy');
				$this.attr({
					src:    $this.attr('data-src'),
					srcset: $this.attr('data-srcset'),
					poster: $this.attr('data-poster')
				});
				$this.removeAttr('data-src data-srcset data-poster');
			})
			.addTo(controller);
		});
	};

	function stickyNav() {

		new ScrollMagic.Scene
		({
			triggerElement: 'body', triggerHook: 0, offset: 60
		})
		.setClassToggle('.oj-navbar', 'oj-shown')
		.addTo(controller);

	}

	// Create an instance of the Scroll Magic Controller
	let controller = new ScrollMagic.Controller();

	lazyLoad();
	stickyNav();

	$('.bs-animated-section').each(function () {

		var $this = $(this);

		new ScrollMagic.Scene
		({
			triggerElement: this, triggerHook: 0.65, reverse: false
		})
		.setClassToggle(this, 'bs-animated')
		.addTo(controller);
	});

});