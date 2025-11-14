let follow = document.querySelector("#Follow");
let followers = document.querySelector(".followers");
let Following = document.querySelector("#Following");
let messageBox = document.querySelector(".message");
let messageBtn = document.querySelector("#Message-btn");
let current = 320;
follow.addEventListener("click", () => {

    followers.textContent = `${current + 1} followers`;
    follow.style.display = "none";
    Following.style.display = "block";

});


Following.addEventListener("click", () => {
    followers.textContent = `${current} followers`;
    follow.style.display = "block";
    Following.style.display = "none";
});
messageBtn.addEventListener("click", () => {
    messageBox.classList.toggle("messageBox");
});