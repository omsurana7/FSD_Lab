document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    // Clear previous errors
    usernameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let errors = false;

    if (username === "") {
        usernameError.textContent = "Username cannot be empty.";
        errors = true;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        errors = true;
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must be 10 digits and contain only numbers.";
        errors = true;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character (&,$,#@).";
        errors = true;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        errors = true;
    }

    if (!errors) {
        alert("Registration successful!");
        // Here, you could add code to submit the form data to the server if needed.
    }
});

