window.onload = function() {
    init();
    icons.forEach(element => {
        element.addEventListener('click', activateIcon);
    });
    games.forEach(element => {
        element.addEventListener('click', gameInfo);
    });
}

let icons = [];
let games = [];

function init() {
    icons = document.querySelectorAll(".icon");
    games = document.querySelectorAll(".game");
}

function activateIcon() {
    let location = this.id + ".html";
    window.location.href = location;
}

function gameInfo() {
    let parent = document.getElementById("card-wrapper");

    let card = document.createElement("div");
    card.classList.add("card");
    card.id = 'gameCard';

    let banner = document.createElement("div");
    banner.classList.add("banner");

    let content = document.createElement("div");
    content.classList.add("content");

    let background = document.createElement("img");
    background.src = this.src;
    background.classList.add("banner-game");

    let gameData = document.createElement("div");
    gameData.classList.add("game-data");

    let gameArt = document.createElement("img");
    gameArt.src = this.src;

    let gameCont = document.createElement("div");
    gameCont.classList.add("game-cont");

    let gameHead = document.createElement("h1");
    gameHead.innerHTML = "Discription"

    let gameDis = document.createElement("h2");
    gameDis.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non. Venenatis urna cursus eget nunc scelerisque viverra mauris in."

    let exit = document.createElement("div");
    exit.innerHTML = "X";
    exit.classList.add("exit");

    exit.addEventListener('click', () => document.getElementById("gameCard").remove());
    
    //banner
    banner.appendChild(background);
    card.appendChild(banner);
    //Discription
    gameCont.appendChild(gameHead);
    gameCont.appendChild(gameDis);
    //content
    gameData.appendChild(gameArt);
    gameData.appendChild(gameCont);
    gameData.appendChild(exit);
    content.appendChild(gameData);
    card.appendChild(content);
    //adding to page
    parent.appendChild(card);
}   

