let body = document.querySelector("body");

let images = [
    "https://images.unsplash.com/photo-1645799281063-be3fccd4b5ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1645799281063-be3fccd4b5ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1679991100469-89de7374a5cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
body.addEventListener("mousemove", (dets) => {
    let x = Math.floor(Math.random() * dets.x);
    let y = Math.floor(Math.random() * dets.y);

    images.forEach((val) => {
        let image = document.createElement("img");
        image.setAttribute("src", val);
        image.style.width = "200px";
        image.style.height = "200px";
        image.style.position = "absolute";
        image.style.left = x + "%";
        image.style.top = y + "%";
        document.querySelector("main").appendChild(image);
    });
});