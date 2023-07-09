const body = document.querySelector("body");
const button = document.querySelector("#button");
const title = document.querySelector("h1");

button.addEventListener("click", () => {
    var ramdonColor = `(${Math.round(Math.random()*256)}, ${Math.round(Math.random()*256)}, ${Math.round(Math.random()*256)})`;
    title.innerText = `Back Ground Color Ramdon
    rgba${ramdonColor}`;
    body.style.backgroundColor = `rgba${ramdonColor}`;
    button.style.color = `rgba(${Math.round(Math.random()*256)}, ${Math.round(Math.random()*256)}, ${Math.round(Math.random()*256)})`;
})