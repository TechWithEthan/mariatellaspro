document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var correctUsername = "tellas";
    var correctPassword = "Admin@123";
    var errorMessage = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        // Store login status in localStorage
        localStorage.setItem('loggedIn', 'true');
        
        // Redirect to the dashboard page after successful login
        showAlert();
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }

    function showAlert() {
        Swal.fire({
            title: "Welcome!",
            text: "Login successful.",
            icon: "success",
        }).then(() => {
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page or another page
        });
    }
});
