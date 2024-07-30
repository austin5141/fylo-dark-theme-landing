// Grab the submit button
const submit = document.querySelector(".submit");
// Grab the error text
const error = document.querySelector(".error");
// Grab the email input field
const input = document.querySelector("#form-email");
// Setup the email tester
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add a click event to the submit button
submit.addEventListener("click", (e) => {
    // Prevent the page from refreshing
    e.preventDefault()
    // Test the inputted email to see if it's valid
    if (email.test(input.value)) {
        // If it is then do nothing
        error.textContent = ""
    } else {
        // But if it isn't then change the error text
        error.textContent = "Please enter a valid email address"
    }
})