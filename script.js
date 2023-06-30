var openPopupButton = document.getElementById("open-popup");
var passwordPopup = document.getElementById("password-popup");
var submitButton = document.getElementById("submit-password");
var passwordInput = document.querySelector("#password-popup input[type='password']");
var projectLinks = document.querySelectorAll(".project-container a");

openPopupButton.addEventListener("click", function () {
    passwordPopup.style.display = "block";
});

submitButton.addEventListener("click", function () {
    var passwords = ["0530", "0242"]; // 각 프로젝트별 패스워드를 배열에 저장하세요
    var inputPassword = passwordInput.value;
    var projectIndex = -1;

    for (var i = 0; i < passwords.length; i++) {
        if (inputPassword === passwords[i]) {
            projectIndex = i;
            break;
        }
    }

    if (projectIndex !== -1) {
        passwordPopup.style.display = "none";
        window.location.href = projectLinks[projectIndex].href;
    } else {
        alert("잘못된 패스워드입니다.");
    }
});

function showPasswordPopup(event) {
    event.preventDefault();
    passwordPopup.style.display = "block";
}
