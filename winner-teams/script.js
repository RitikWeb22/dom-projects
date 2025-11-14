let btn = document.querySelector("button");
let card = document.querySelector("#card");
let head = document.querySelector("#card span");
let main = document.querySelector("main");

let iplTeams2026 = [
    {
        team: "CSK",
        primary: "yellow",
        secondary: "blue",
        fullName: "Chennai Super Kings",
        trophies: 5,
        captain: "Ruturaj Gaikwad"
    },
    {
        team: "MI",
        primary: "blue",
        secondary: "gold",
        fullName: "Mumbai Indians",
        trophies: 5,
        captain: "Hardik Pandya"
    },
    {
        team: "RCB",
        primary: "red",
        secondary: "black",
        fullName: "Royal Challengers Bangalore",
        trophies: 0,
        captain: "Rajat Patidar"
    },
    {
        team: "KKR",
        primary: "purple",
        secondary: "gold",
        fullName: "Kolkata Knight Riders",
        trophies: 3,
        captain: "Shreyas Iyer"
    },
    {
        team: "RR",
        primary: "pink",
        secondary: "blue",
        fullName: "Rajasthan Royals",
        trophies: 1,
        captain: "Sanju Samson"
    },
    {
        team: "SRH",
        primary: "orange",
        secondary: "black",
        fullName: "Sunrisers Hyderabad",
        trophies: 1,
        captain: "Pat Cummins"
    },
    {
        team: "DC",
        primary: "blue",
        secondary: "red",
        fullName: "Delhi Capitals",
        trophies: 0,
        captain: "Rishabh Pant"
    },
    {
        team: "PBKS",
        primary: "red",
        secondary: "silver",
        fullName: "Punjab Kings",
        trophies: 0,
        captain: "Shikhar Dhawan"
    },
    {
        team: "GT",
        primary: "navy",
        secondary: "gold",
        fullName: "Gujarat Titans",
        trophies: 1,
        captain: "Shubman Gill"
    },
    {
        team: "LSG",
        primary: "skyblue",
        secondary: "orange",
        fullName: "Lucknow Super Giants",
        trophies: 0,
        captain: "KL Rahul"
    }
];

// creating new elements
let TeamName = document.createElement("h1");
let captainName = document.createElement("h2");
let trophies = document.createElement("h3");

btn.addEventListener("click", () => {

    let winners = iplTeams2026[Math.floor(Math.random() * iplTeams2026.length)];


    head.textContent = `Team: ${winners.team}`;
    TeamName.textContent = `Team Name: ${winners.fullName}`;
    captainName.textContent = `Team Captain: ${winners.captain}`;
    trophies.textContent = `Trophies: ${winners.trophies}`;
    card.append(TeamName, captainName, trophies);

    card.style.backgroundColor = winners.secondary;
    card.style.color = "white";
    main.style.backgroundColor = winners.primary;




});