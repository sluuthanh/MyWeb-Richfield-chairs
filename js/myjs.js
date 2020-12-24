document.addEventListener("DOMContentLoaded", function(event){
// Modal item
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');
const modalSuccess = document.getElementById('modal-signup-success');
const openBtnSuccess = document.querySelector('.success-btn');
const closeBtnSuccess = document.querySelector('.close-success-btn');

// Click Events
openBtn.addEventListener('click', ()=>{
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', ()=>{
	modal.style.display = 'none';
});

closeBtnSuccess.addEventListener('click', ()=>{
	modalSuccess.style.display = 'none';
});

window.addEventListener('click', (e)=>{
	if(e.target === modal){
		modal.style.display ='none';
		modalSuccess.style.display ='none';
	}
});



// window.addEventListener('click', (e)=>{
// 	if(e.target === modalSuccess){
// 		modalSuccess.style.display ='none';
// 	}
// });

//Form Validation
const form = document.getElementById('form');
const namecreate = document.getElementById('name');
const emailcreate = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//Show error message
function showError(input, message){
	const formValidation = input.parentElement;
	formValidation.className = 'form-validation error';

	const errorMessage = formValidation.querySelector('p');
	errorMessage.innerText = message;
}

//Show valid message
function showValid(input){
	const formValidation = input.parentElement;
	formValidation.className = 'form-validation valid';
}

//Check required fields
function checkRequired(inputArr){
	let result = true
	inputArr.forEach(function(input) {
		if(input.value.trim()===''){
			showError(input, `${getFieldName(input)} is required`);	
			result = false;
		} else {
			showValid(input);
		}
	});
	return result;
}

//Check input length
function checkLength(input, min, max){
	if(input.value.length < min){
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
		
	} else if (input.value.length > max){
		showError(input, `${getFieldName(input)} must be less than ${max} characters`)
		
	} else {
		showValid(input);
		return true;
	}
	
}

// Check passwords match
function passwordMatch(input1,input2){
	if(input1.value !== input2.value){
		showError(input2, 'Passwords dont match');
		return false;
	}
	else {
		return true;
	}
}

// Get fieldname
function getFieldName(input){
	return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event Listeners
form.addEventListener('submit', (e) => {
	e.preventDefault();

	let check1 = checkRequired([namecreate ,emailcreate ,password, passwordConfirm]);
	let check2 = checkLength(namecreate, 3,30);
	let check3 = checkLength(password, 8,25);
	let check4 = checkLength(passwordConfirm, 8,25);
	let check5 = passwordMatch(password,passwordConfirm);
	
	if (check1 && check2 && check3 && check4 && check5){
		swal("Good job!Amazing!!!", "Congratulation!", "success");
		console.log ('success case') ;
		console.log (check1) ;
		console.log (check2) ;
		console.log (check3) ;
		console.log (check4) ;
		console.log (check5) ;
	} else {
		// return false;
		console.log ('fail case') ;
		console.log (check1) ;
		console.log (check2) ;
		console.log (check3) ;
		console.log (check4) ;
		console.log (check5) ;
	}
})

});


//Validation Function Contact Form
function formValidator(){
	if($('[name="cmt"]').val().length < 2){
		$('[name= "cmt"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "cmt"]').css('border', '2px solid #30EF0FFF');
	if($('[name="name"]').val().length < 2){
		$('[name= "name"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "name"]').css('border', '2px solid #30EF0FFF');
	if(!isEmail($('[name= "email"]').val())){
		$('[name= "email"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "email"]').css('border', '2px solid #30EF0FFF');
	if($('[name="subject"]').val().length < 3){
		$('[name= "subject"]').css('border', '2px solid #CF2F2FFF');
	}else $('[name= "subject"]').css('border', '2px solid #30EF0FFF');
	if($('[name="cmt"]').val().length > 1 && $('[name="name"]').val().length > 1 
		&& isEmail($('[name="email"]').val()) 
		&& $('[name="subject"]').val().length > 2){
		$('#modal-contact-success').modal();
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

// function isPass(password) {
// 	var isValid = false;
// 	var regex = /^{5,}$/;
// 	if(regex.test(password)) {
// 		isValid = true;
// 	}
// 	return isValid;
// }

// function passValid() {
// 	$('.form-control').keyup(function() {
// 		var password = $(this).val();
// 		if(!isPass(password)){
// 			$(this).css('border', '2px solid #CF2F2FFF');
// 		}else $(this).css('border', '2px solid #30EF0FFF');
// 	});
// }

function resetForm() {
	$('[name]').css('border', '');
}









