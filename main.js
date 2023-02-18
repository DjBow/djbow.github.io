function menuOpen() {
    menu = document.getElementById("menu")
    // menu.style.opacity ? menu.style = "opacity: 0%;" : menu.style = "opacity: 100%;"
    // menu.style.opacity = "0"
    if (menu.style.opacity == "1") {
        menu.style = "opacity: 0;"
    }
    else {
        menu.style = "opacity: 1;"
    }

}

function hideOtherTags(tag) {
    cards = document.getElementsByClassName("card")
    for (const card of cards) {
        if (card.children[0].className !== `${tag}`) {
            console.log(card.children[0].className)
            card.style.display = "none"
        }
        else {
            card.style.display = "flex"
        }
    }
}