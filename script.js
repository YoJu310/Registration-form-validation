// function to validate username

function validateUsername(username) {
    const minLength = 3;
    const maxLength = 15;

    // Check length
    if (username.length < minLength || username.length > maxLength) {
        return `Username must be between ${minLength} and ${maxLength} characters long.`;
    }

    // Check for allowed characters (alphanumeric and underscore)
    const regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(username)) {
        return "Username can only contain letters, numbers, and underscores.";
    }

    // No spaces allowed
    if (username.includes(' ')) {
        return "Username cannot contain spaces.";
    }

    return "Username is valid.";
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email Validation
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone Validation
    const phone = document.getElementById('phone');
    if (phone.value.length !== 10 || phone.value === '1234567890') {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Password Validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordDiv=document.getElementsByClassName('passwordDiv');
    if (password.value.length < 8) {
        if ( password.value.toLowerCase() === fullName.value.toLowerCase()){
            passwordDiv[0].innerText="Invalid ! Password must not be your name .";
            password.classList.add('is-invalid');
            isValid = false;
        }
        else {
            passwordDiv[0].innerText="Weak Password !";
            password.classList.add('is-invalid');
            isValid = false;
        }    
    }else if (password.value.toLowerCase() === 'password' ) {
        passwordDiv[0].innerText="Password must not be 'password' !";
        password.classList.add('is-invalid');
        isValid = false;
    }
    else if (password.value.toLowerCase() === fullName.value.toLowerCase()) {
        passwordDiv[0].innerText="Invalid ! Password must not be your name .";
        password.classList.add('is-invalid');
        isValid = false;
    }
     else {
        password.classList.remove('is-invalid');
    }

    // Confirm Password Validation
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // Submit form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
   
    const usernameInput= document.getElementById('userName');
    const usernameDiv=document.getElementById('usernameDiv');
    const errorMessage = validateUsername(usernameInput.value);
    console.log(errorMessage);
    console.log(errorMessage !== "Username is valid.");
    
    if (errorMessage !== "Username is valid.") {
        usernameDiv.innerText=errorMessage;
        usernameInput.classList.add('is-invalid');
        isValid = false;
        
    } else {
        usernameInput.classList.remove('is-invalid');     
    }  
    
});





