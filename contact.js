const mesajForm = document.querySelector(".messageus")
const emailInput = document.querySelector(".email-input")
const messageInput = document.querySelector(".message-input")
const gonder = document.querySelector(".btn")
const uyari = document.querySelector(".alert")

gonder.addEventListener("click", mesajAl)

function mesajAl() {
    if (emailInput.value === "") {
        showAlert("danger", "e-posta adresini gir!")
    } else if (messageInput.value === "") {
        showAlert("danger", "mesajını gir!")
    } else {
        emailInput.value = ""
        messageInput.value = ""
        showAlert("success", "mesajını aldık!")
    }
}

function showAlert(type, message) {
    gonder.setAttribute("disabled", "true")
    uyari.display = "block"
    uyari.classList = `alert ${type}`
    uyari.textContent = message
    setTimeout(function () {
        uyari.display = "none"
        uyari.textContent = ""
    }, 2000)

    setTimeout(function () {
        gonder.removeAttribute("disabled")
    }, 1000)
}