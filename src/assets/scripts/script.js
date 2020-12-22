
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

	$('.ec-video-container .ec-video-poster').on('click', function() {

		var container = $(this).parent();
		var frame = container.find('.ec-video-frame');
		var poster = container.find('.ec-video-poster');

		container.addClass('ec-video-open');
		frame.prepend('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/468269570?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');

	});

});

//----------------------------------------------------------------------------//
// Video Container                                                            //
//----------------------------------------------------------------------------//
$(function()
{

	$('.ec-video-container .ec-video-poster').on('click', function() {

		var container = $(this).parent();
		var frame = container.find('.ec-video-frame');
		var poster = container.find('.ec-video-poster');

		container.addClass('ec-video-open');
		frame.prepend('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/468269570?autoplay=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');

	});

});

//----------------------------------------------------------------------------//
// Owl Carousels                                                              //
//----------------------------------------------------------------------------//
$(function()
{
	
	// $('.bs-hero').owlCarousel({
	// 	dots: true,
	// 	loop: true,
	// 	nav: true,
	// 	items: 1
	// });

});

//----------------------------------------------------------------------------//
// Register Form                                                              //
//----------------------------------------------------------------------------//
$(function()
{

	$('.bs-select').on('change',function() {

		var value = $(this).val();

		$('.bs-select-choice').html(value);
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
			triggerElement: this, triggerHook: 0.5, reverse: false
		})
		.setClassToggle(this, 'bs-animated')
		.addTo(controller);
	});

});