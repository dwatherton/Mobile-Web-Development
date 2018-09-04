$(document).ready(function () {
	var maxLength = 750;
	$('textarea').keyup(function () {
		var length = $(this).val().length;
		var length = maxLength - length;
		$('#chars').text(length);
	});
});


//This script is for displaying the number of characters remaining in the <textarea id="textareaChars"> 
//feild of my contact form on the contact.html page of my website.