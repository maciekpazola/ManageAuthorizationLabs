//Pobranie elementow ze strony
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const registerButton = document.getElementById("register-form-submit");

//Jezeli przycisk login bedzie klikniety to pobieramy wartosci z pol username i password i sprawdzamy czy ich wartosc
//Jest rowna "nazwa" i "haslo" jezeli tak to wyswietlamy alert i restartujemy widok strony, jezeli nie to wyswietlamy alert i error
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "nazwa" && password === "haslo") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Try again");
        loginErrorMsg.style.opacity = 1;
    }
})
//Jezeli przycisk register jest klikany to potem bedzie wyswietlony alert
registerButton.addEventListener("click", function () {
    alert("Register is not handled yet");
});
