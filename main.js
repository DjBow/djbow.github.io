function menuOpen() {
    menu = document.getElementById("menu")
    if (menu.style.opacity == "0") {
        menu.style = "opacity: 1;"
    }
    else {

        menu.style = "opacity: 0;"
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

