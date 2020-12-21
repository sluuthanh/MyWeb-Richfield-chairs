$(document).ready(function() {
	loadNavbar();
	$('#scroll-to-top').click(function(){
		$('html').animate({scrollTop : 0}, 500);
	});
});

$(window).scroll(function() {
	if(window.scrollY == 0){
		$('.navbar-top').stop(true, false);
		$('.navbar-top').animate({top: -200}, 500, function() {
			$('.nav-full').show();
			$('.divider-nav').show();
			$('.nav-group').css('margin', '0px');
			$('.navbar-top').css('background', 'linear-gradient(#000000E2, #FFFFFF00)');
			$('.navbar-top').css('box-shadow', 'none');
		});
		$('.navbar-top').animate({top: 0}, 500);
	}else if(window.scrollY < 10){
		$('.navbar-top').stop(true, false);
		$('.navbar-top').animate({top: -200}, 500, function() {
			$('.nav-full').hide();
			$('.divider-nav').hide();
			$('.nav-group').css('margin', '25px 0px');
			$('.navbar-top').css("background-image", "url('images/nav/stickynavBG.jpg')");
			$('.navbar-top').css('box-shadow', '0px 3px 3px #00000074');
		});
		$('.navbar-top').animate({top: 0}, 500);
	}	
});

function loadNavbar() {
	if(window.scrollY == 0){
		$('.navbar-top').animate({top: -200}, 0, function() {
			$('.navbar-top').animate({top: 0}, 500); 
		});
	}else{
		$('.navbar-top').css("background-image", "url('images/nav/stickynavBG.jpg')");
		$('.nav-full').hide();
		$('.divider-nav').hide();
		$('.nav-group').css('margin', '25px 0px');
		$('.navbar-top').css('box-shadow', '0px 3px 3px #00000074');
		$('.navbar-top').animate({top: -200}, 0, function() {
			$('.navbar-top').animate({top: 0}, 500);
		});
	}
	navbarToggle();
}

function navbarToggle() {
	$('#nav-icon').hover(function(){
		$(this).toggleClass('hover');
	});
	$('#nav-icon').click(function(){
		$('#nav-mobile').removeClass('nav-mobile-hide');
		$('#nav-mobile').addClass('nav-mobile-show');
	});
	$('#nav-close-icon').click(function(){
		$('#nav-mobile').removeClass('nav-mobile-show');
		$('#nav-mobile').addClass('nav-mobile-hide');
	});
}
function animationHover() {
	$('[rotate-data="3deg"]').css('transform', 'rotate(3deg)');
	$('[rotate-data="-3deg"]').css('transform', 'rotate(-3deg)');
	$('[rotate-data="3deg"]').mouseover(function() {
		this.style.transform = "rotate(0deg)";
	});
	$('[rotate-data="3deg"]').mouseout(function() {
		this.style.transform = "rotate(3deg)";
	});
	$('[rotate-data="0deg"]').mouseover(function() {
		this.style.transform = "rotate(3deg)";
	});
	$('[rotate-data="0deg"]').mouseout(function() {
		this.style.transform = "rotate(0deg)";
	});
	$('[rotate-data="-3deg"]').mouseover(function() {
		this.style.transform = "rotate(0deg)";
	});
	$('[rotate-data="-3deg"]').mouseout(function() {
		this.style.transform = "rotate(-3deg)";
	});
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scroll-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scroll-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

function initializeMap(){ 
	 // Loading Google Maps
	var latlng = new google.maps.LatLng(10.786681, 106.666378);
	var myOptions = {
		zoom: 18,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var mymap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	var marker = new google.maps.Marker({
		position: latlng,
		map:mymap,
		title:"Central Zoo"
	});	
}
//Validation Function
function formValidator(){
	if($('[name="firstname"]').val().length < 2){
		$('[name= "firstname"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "firstname"]').css('border', '2px solid #30EF0FFF');
	if($('[name="lastname"]').val().length < 2){
		$('[name= "lastname"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "lastname"]').css('border', '2px solid #30EF0FFF');
	if($('[name="age"]').val() < 16 || $('[name="age"]').val() > 70){
		$('[name= "age"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "age"]').css('border', '2px solid #30EF0FFF');
	if(!isEmail($('[name= "email"]').val())){
		$('[name= "email"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "email"]').css('border', '2px solid #30EF0FFF');
	if($('[name="phone"]').val().length < 10 || $('[name="phone"]').val().length > 13){
		$('[name= "phone"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "phone"]').css('border', '2px solid #30EF0FFF');
	if($('[name="comment"]').val().length < 3){
		$('[name= "comment"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "comment"]').css('border', '2px solid #30EF0FFF');
	if($('[name="firstname"]').val().length > 1 && $('[name="lastname"]').val().length > 1 && $('[name="age"]').val() > 15 && $('[name="age"]').val() < 71 && isEmail($('[name="email"]').val()) && $('[name="phone"]').val().length > 9 && $('[name="phone"]').val().length < 14 && $('[name="comment"]').val().length > 2)
	{
		$('#zoo-modal').modal();
		// $("#alertMsg").fadeIn('slow', function () {
		// 	$(this).delay(3000).fadeOut('slow');
		//   })
		
	}
}

function textValid() {
	$('.form-control').keyup(function() {
		if($(this).val() == "" || $(this).val().length < 2){
				$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function commentValid() {
	$('.form-control').keyup(function() {
		if($(this).val().length < 3){
			$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function phoneValid() {
	$('.form-control').keyup(function() {
		if($(this).val().length < 10 || $(this).val().length > 13){
				$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function ageValid() {
	$('.form-control').keyup(function() {
		if($(this).val() < 16 || $(this).val() > 70){
				$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function isEmail(email) {
	var isValid = false;
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regex.test(email)) {
		isValid = true;
	}
	return isValid;
}

function emailValid() {
	$('.form-control').keyup(function() {
		var email = $(this).val();
		if(!isEmail(email)){
			$(this).css('border', '2px solid #CF2F2FFF');
		}else $(this).css('border', '2px solid #30EF0FFF');
	});
}

function resetForm() {
	$('[name]').css('border', '');
}

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var day = days[d.getDay()];
var date = d.getDate();
var month =  months[d.getMonth()];
var year = d.getFullYear();
var today = day + "<br>" + date + "/" + month +"/"+year;

function changeImage() {
	$('.indicator').click(function() {
		var img = $(this).css('background-image');
		img = img.slice(5, -2);
		$('#show').attr('src', img);
	});
}

function searchAnimal() {
	$('.search-animal').keyup(function() {
		var text = $('.search-animal').val();
		var grid = $('[data-title]');
		grid.map(function() {
			var title = $(this).attr('data-title');
			var test = title.search(text);
			if(test == -1){
				$(this).removeClass('col-xs-6');
				$(this).removeClass('col-md-4');
				$(this).addClass('hidden');
			}else{
				$(this).addClass('col-xs-6');
				$(this).addClass('col-md-4');
				$(this).removeClass('hidden');
			}
		});
	});
}

function sweetAlert(imgUrl) {
	swal({
  		html:`
			<div id="alert-carousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#alert-carousel" data-slide-to="0" class="active"></li>
					<li data-target="#alert-carousel" data-slide-to="1" class=""></li>
					<li data-target="#alert-carousel" data-slide-to="2" class=""></li>
				</ol>
				<div class="carousel-inner">
					<div class="item active" style="background-image: url(` + imgUrl[0] + `)"></div>
					<div class="item" style="background-image: url(` + imgUrl[1] + `)"></div>
					<div class="item" style="background-image: url(` + imgUrl[2] + `)"></div>
				</div>
				<a class="left carousel-control" href="#alert-carousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
				<a class="right carousel-control" href="#alert-carousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
			</div>
  		`,
  		width: 1500,
  		padding: '3em',
  		background: '#fff',
  		backdrop: `
    		rgba(0,0,0,0.7)
    		center left
    		no-repeat
  		`,
  		showCancelButton: true,
	 	confirmButtonColor: '#3085d6',
	  	cancelButtonColor: '#d33',
	  	confirmButtonText: 'Booking',
	  	cancelButtonText: 'Close'
	}).then((result) => {
	  	if (result.value) {
		    swal({
		    	title: 'Booking',
		    	input: 'Multiple input',
		    	html:
				    '<input id="swal-input1" class="swal2-input" placeholder="Enter your name">' +
				    '<input id="swal-input2" class="swal2-input" placeholder="Enter your phone">',
				focusConfirm: false,
				showCancelButton: true,
				confirmButtonText: 'Confirm',
				cancelButtonColor: '#d33',
				preConfirm: () => {
				    return [
				    	document.getElementById('swal-input1').value,
				    	document.getElementById('swal-input2').value
				    ]
				},
				inputValidator: () => {
					var  value = false;
					if(document.getElementById('swal-input1').value == ''){
						return !value && 'You need to enter your name!';
					} else if(document.getElementById('swal-input2').value == ''){
						return !value && 'You need to enter your phone!';
					}
					if(document.getElementById('swal-input1').value.length < 2){
						return !value && 'The name must be 2 or more characters!';
					} else if(document.getElementById('swal-input2').value.length < 10){
						return !value && 'Phone number must be 10 digits!';
					}
				}
		    }).then((result) => {
		    	if(result){
		    		swal({
						type: 'success',
						title: 'Successful',
					    html:`
							<h4>Hi ` + result.value[0] + `</h4>
							<h4>Your phone is: ` + result.value[1] + `</h4>
							<h4 class="text-success">We will contact you as soon as possible</h4>
					    `,
					    confirmButtonText: 'Done!'
					})
		    	}
		    })
	  	}
	})
}

function addToCart() {
	$('[data-cart]').click(function() {
		$('.cart-group').removeClass('buzz');
		$('.cart-group').hide();
		$('.cart-group').show();
		$('.cart-group').addClass('buzz');
	});
}

function filterAnimals() {
	if($('#filter-all').is(':checked')){
		$('[data-groups]').show('slide');
	}
	if($('#filter-birds').is(':checked')){
		$('[data-groups]').hide();
		$('[data-groups="bird"]').show('slide');
	}
	if($('#filter-land').is(':checked')){
		$('[data-groups]').hide();
		$('[data-groups="land"]').show('slide');
	}
	if($('#filter-water').is(':checked')){
		$('[data-groups]').hide();
		$('[data-groups="water"]').show('slide');
	}
}
