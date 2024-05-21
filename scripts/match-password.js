const password1 = document.getElementById("password");
const password2 = document.getElementById("password-confirmed");
const message = document.getElementById("match-message");

message.style.display = "none";

password2.addEventListener("focusout", () => {
    if (password1.value !== password2.value) {
        password1.value = "";
        password2.value = "";

        password1.focus();

        message.style.display = "block";
        message.innerHTML = "&#9888; The password does not match. Try again.";
    } else {
        message.style.display = "none";
        message.textContent = "";
    }
});
