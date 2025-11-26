let para = document.querySelector("p");
let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;
const head1 = heading1.innerText;
const head2 = heading2.innerText;

// heading1
heading1.addEventListener("mouseenter", () => {
    setInterval(() => {
        const str = text.split("").map((char, idx) => {
            return characters.split("")[Math.floor(Math.random() * 53)];
        }).join("");
        heading1.innerText = str;
    }, 100);
});

// heading2
heading2.addEventListener("mouseenter", () => {
    setInterval(() => {
        const str = text.split("").map((char, idx) => {
            return characters.split("")[Math.floor(Math.random() * 53)];
        }).join("");
        heading2.innerText = str;
    }, 100);
});

// paragraph
para.addEventListener("mouseenter", () => {
    setInterval(() => {
        const str = text.split("").map((char, idx) => {
            return characters.split("")[Math.floor(Math.random() * 53)];
        }).join("");
        para.innerText = str;
    }, 100);
});