document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (email === '') {
                alert('Please enter your email or mobile phone number.');
                return;
            }

            if (password === '') {
                alert('Please enter your password.');
                return;
            }

            // Add more validation if needed

            alert('Form submitted successfully!');

            // Here you can add code to submit the form data to your server using AJAX, for example
            // Or you can simply allow the form to submit normally by removing the event.preventDefault() line
        });
    } else {
        console.error('Element with ID loginForm not found.');
    }
});
