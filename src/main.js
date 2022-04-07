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
    card.classList.add("info-card");
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
    gameHead.innerHTML = "Description"

    let gameDis = document.createElement("h2");
    gameDis.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non. Venenatis urna cursus eget nunc scelerisque viverra mauris in."

    let gameGroup = document.createElement("a");
    gameGroup.innerHTML = "Join Community";
    gameGroup.classList.add("link");

    let exit = document.createElement("div");
    exit.innerHTML = "X";
    exit.classList.add("exit");

    exit.addEventListener('click', () => document.getElementById("gameCard").remove());
    
    let list = document.createElement("div");
    list.classList.add('list-wrapper');
    addRentals(list);

    //banner
    banner.appendChild(background);
    card.appendChild(banner);
    //Discription
    gameCont.appendChild(gameHead);
    gameCont.appendChild(gameDis);
    gameCont.appendChild(gameGroup);
    //content
    gameData.appendChild(gameArt);
    gameData.appendChild(gameCont);
    gameData.appendChild(exit);
    content.appendChild(gameData);
    content.appendChild(list);   
    card.appendChild(content);
    //adding to page
    parent.appendChild(card);
}   

function addRentals (parent) {
    let rentals = [{price: "$3", condition: "fair", seller: "Pacific 3/5"}, {price: "$5", condition: "mint", seller: "Iris 4/5"}, {price: "$3", condition: "fair", seller: "Pacific 3/5"}, {price: "$5", condition: "mint", seller: "Iris 4/5"}];

    rentals.forEach(i => {
        let listing = document.createElement("div");
        listing.classList.add("listing");

        let price = document.createElement("div");
        price.innerHTML = "Price: " + i["price"];

        let condition = document.createElement("div");
        condition.innerHTML = "Condition: " + i["condition"];

        let seller = document.createElement("div");
        seller.innerHTML = "Seller: " + i["seller"];

        let rent = document.createElement("button");
        rent.innerHTML = "Rent";

        listing.appendChild(price);        
        listing.appendChild(condition);
        listing.appendChild(seller);
        listing.appendChild(rent);
        parent.appendChild(listing);
    });
}