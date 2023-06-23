var openPopupButton = document.getElementById("open-popup");
var passwordPopup = document.getElementById("password-popup");
var submitButton = document.getElementById("submit-password");
var passwordInput = document.querySelector("#password-popup input[type='password']");
var projectLink = document.querySelector(".project-container a");

openPopupButton.addEventListener("click", function () {
    passwordPopup.style.display = "block";
});

submitButton.addEventListener("click", function () {
    var password = "0530"; // 패스워드를 여기에 입력하세요

    if (passwordInput.value === password) {
        passwordPopup.style.display = "none";
        window.location.href = projectLink.href; // 링크로 이동하는 대신 페이지를 새로고침하여 링크를 열어보세요.
    } else {
        alert("잘못된 패스워드입니다.");
    }
});

function showPasswordPopup(event) {
    event.preventDefault();
    passwordPopup.style.display = "block";
}
