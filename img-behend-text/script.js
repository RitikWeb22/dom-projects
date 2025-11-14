let elem = document.querySelectorAll(".elem");

elem.forEach((val) => {
    console.log(val.childNodes[3]);
    val.addEventListener("mouseenter", () => {
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", (dets) => {
        val.childNodes[3].style.left = dets.x + "px";
        // val.childNodes[3].style.top = dets.y + "px";
    });
});