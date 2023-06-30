var openPopupButton = document.getElementById("open-popup");
var passwordPopup = document.getElementById("password-popup");
var submitButton = document.getElementById("submit-password");
var passwordInput = document.querySelector("#password-popup input[type='password']");
var projectLinks = document.querySelectorAll(".project-container a");

openPopupButton.addEventListener("click", function () {
    passwordPopup.style.display = "block";
});

submitButton.addEventListener("click", function () {
    var passwords = ["0530", "0242"]; // �� ������Ʈ�� �н����带 �迭�� �����ϼ���
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
        alert("�߸��� �н������Դϴ�.");
    }
});

function showPasswordPopup(event) {
    event.preventDefault();
    passwordPopup.style.display = "block";
}
