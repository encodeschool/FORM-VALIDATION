let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phone-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitError = document.querySelector('#submit-error');

function validateName() {
    let name = document.querySelector('#fullName').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Enter Full Name';
        return false;
    }

    nameError.innerHTML = "<p class='valid'><i class='bx bxs-check-square'></i> Valid</p>";
    return true;
}

function validatePhone() {
    let phone = document.querySelector('#phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    } 
    if (phone.length !== 7) {
        phoneError.innerHTML = 'Phone should be longer 7 digits'    
        return false;
    }
    if (!phone.match(/^[0-9]{7}$/)) {
        phoneError.innerHTML = 'Only digits';
        return false;
    }

    phoneError.innerHTML = "<i class='bx bxs-check-square'></i> Valid";
    return true;
}

function validateEmail() {
    let email = document.querySelector('#email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'email is required';
        return false;
    } 

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'invalid email';
        return false;
    }

    emailError.innerHTML = "<i class='bx bxs-check-square'></i> Valid";
    return true;
}

function validateMessage() {
    let message = document.querySelector('#message').value;
    let required = 30;
    let left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    emailError.innerHTML = "<i class='bx bxs-check-square'></i> Valid";
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}