const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const input = document.querySelector("#form-email");
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (email.test(input.value)) {
        error.textContent = ""
    } else {
        error.textContent = "Please enter a valid email address"
    }
})