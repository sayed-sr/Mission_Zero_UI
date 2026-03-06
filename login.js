// Get the login form
const form = document.getElementById("loginForm");

/*
This event runs when the login button is pressed
*/
form.addEventListener("submit", function(event){

    // Stop the page from refreshing=========================================================================
    event.preventDefault();

    // Get values typed by the user==========================================================================
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    /*
    Check if the username and password
    match our required login credentials
    */
    if(username === "minuszero@gmail.com" && password === "dbms"){

        // Save login state in browser
        localStorage.setItem("loggedIn","true");

        // Show success message
        alert("Login Successful!");

        // Redirect to the main project page
        window.location.href = "index.html";

    }else{

        // Show error if credentials are wrong
        alert("Invalid username or password");

    }

});