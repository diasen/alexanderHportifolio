const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError');
const submit = document.querySelector('#submit');

submit.onclick = function (event) {
	event.preventDefault();

	const name = document.querySelector('#name').value.trim();
	const email = document.querySelector('#email').value.trim();
	const textbox = document.querySelector('#textbox').value.trim();

	if (testLen(name, 3)) {
		nameError.classList.add('hide');
		nameError.classList.remove('show');
	} else {
		nameError.classList.add('show');
		nameError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

	if (textbox.length > 9) {
		messageError.classList.add('hide');
		messageError.classList.remove('show');
	} else {
		messageError.classList.add('show');
		messageError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}

function testLen(elm, len) {
	if (elm.length > len) {
		return true;
	} else {
		return false;
	}
}
