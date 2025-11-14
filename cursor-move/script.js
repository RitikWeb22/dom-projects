
let body = document.querySelector("body");
let cursor = document.querySelector(".circle");

body.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});