var openPopupButton = document.getElementById("open-popup");
var passwordPopup = document.getElementById("password-popup");
var submitButton = document.getElementById("submit-password");
var passwordInput = document.querySelector("#password-popup input[type='password']");
var projectLink = document.querySelector(".project-container a");

openPopupButton.addEventListener("click", function () {
    passwordPopup.style.display = "block";
});

submitButton.addEventListener("click", function () {
    var password = "패스워드를 여기에 입력하세요";

    if (passwordInput.value === password) {
        passwordPopup.style.display = "none";
        projectLink.click();
    } else {
        alert("잘못된 패스워드입니다.");
    }
});

function showPasswordPopup(event) {
    event.preventDefault();
    passwordPopup.style.display = "block";
}
