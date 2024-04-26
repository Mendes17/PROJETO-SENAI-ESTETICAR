const menu = document.querySelector("ul")
const bt_menu = document.querySelector("#bt-menu")
const bt_fechar = document.querySelector("#bt-close ")
const body = document.querySelector("body")
const whatsapp = document.querySelector("#logo-whatsapp")

function openMenu() {
    body.style.overflow = "hidden"
    menu.style.display = "flex"
    bt_menu.style.display = "none"
    bt_fechar.style.display = "inline"
    whatsapp.style.display = "none"
}

function closeMenu() {
    menu.style.display = "none"
    bt_menu.style.display = "inline"
    bt_fechar.style.display = "none"
    body.style.overflow = "auto"
    whatsapp.style.display = "block"
}

