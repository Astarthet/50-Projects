const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const back = document.getElementById("back");

back.onclick = () => {
    nav.className = "navDisplay";
    menu.classList = "menuBar"
}

menu.onclick = () => {
    nav.className = "nav1";
    menu.classList = "menu"
}

