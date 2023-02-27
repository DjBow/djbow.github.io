function menuOpen() {
    menu = document.getElementById("menu")

    if (menu.style.opacity == "0") {
        menu.style = "opacity: 1;"
        menu.style.visibility = "visible"

    }
    else {
        menu.style = "opacity: 0;"
        menu.style.visibility = "hidden"
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

function searchOpen() {
    icon = document.getElementById("search_ico")

    if (icon.style.opacity == "0") {
        icon.style = "opacity: 1;"
        icon.style.visibility = "visible"
    }
    else {
        icon.style = "opacity: 0;"
        icon.style.visibility = "hidden"
    }

}


