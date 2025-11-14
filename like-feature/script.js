let card = document.querySelector(".card");
let love = document.querySelector("i");


card.addEventListener("dblclick", () => {
    love.style.display = "initial";
    love.style.transform = "translate(-50%, -50%) scale(3)";
    love.style.opacity = .7;
    setTimeout(() => {
        love.style.opacity = 0;
        love.style.display = "none";
    }, 2000);
});