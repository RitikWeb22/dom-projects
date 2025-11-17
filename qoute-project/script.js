let btn = document.querySelector("button");


const jesusQuotes = [
    "Love your neighbor as yourself.",
    "Do not let your hearts be troubled. Trust in God; trust also in me.",
    "I am the way, the truth, and the life.",
    "With God all things are possible.",
    "Let the one who is without sin cast the   stone.",
    "Ask and it will be given to you; seek and you will find.",
    "Blessed are the peacemakers.",
    "Forgive, and you will be forgiven.",
    "You are the light of the world.",
    "Do to others as you would have them do to you.",
    "Peace I leave with you; my peace I give you.",
    "For where your treasure is, there your heart will be also.",
    "Love your enemies and pray for those who persecute you.",
    "I am the good shepherd.",
    "In this world you will have trouble. But take heart, I have overcome the world.",
    "Let the little children come to me.",
    "Man shall not live by bread alone.",
    "Your faith has made you well.",
    "Seek first the kingdom of God.",
    "Come to me, all you who are weary and burdened, and I will give you rest."
];


btn.addEventListener("click", () => {
    let box = document.createElement("div");
    let qoute = document.createElement("p");
    // colors generate
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    // random positions
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);
    // scale & roate
    let s = Math.random() * 2;
    let r = Math.floor(Math.random() * 360);
    // qoutes inset 
    let qoutes = Math.floor(Math.random() * jesusQuotes.length);
    console.log(jesusQuotes[qoutes]);
    qoute.innerHTML = `<q> ${jesusQuotes[qoutes]} </q>`;
    box.style.height = "150px";
    box.style.width = "250px";
    box.classList.add("box");
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    // box.style.position = "absolute";
    box.style.left = x + "%";
    box.style.top = y + "%";
    box.style.scale = s;
    box.style.rotate = r + "deg";
    box.appendChild(qoute);


    document.querySelector("main").appendChild(box);
});