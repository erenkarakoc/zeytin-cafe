const more = document.querySelector(".more")
const fazlasi = document.querySelector(".fazlasi")
const cross = document.querySelector(".fa-times-circle")
const goLeft = document.querySelector(".fa-arrow-circle-left")
const goRight = document.querySelector(".fa-arrow-circle-right")
const cardContainer = document.querySelector(".card-container")
const disableDiv = document.getElementById("disable-div")

more.addEventListener("click", fazlasiGelsin)
cross.addEventListener("click", fazlasiGitsin)
disableDiv.addEventListener("click", fazlasiGitsin)

goLeft.onclick = function () {
    cardContainer.scrollLeft -= 1202
}

goRight.onclick = function () {
    cardContainer.scrollLeft += 1202
}


function fazlasiGelsin() {
    fazlasi.classList.remove("hidden")
    disableDiv.style.display = "block"
}

function fazlasiGitsin() {
    fazlasi.classList.add("hidden")
    disableDiv.style.display = "none"
}

