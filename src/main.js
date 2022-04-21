import * as crud from './crud.js';

window.onload = async function () {
    await init();
    icons.forEach(element => {
        element.addEventListener('click', activateIcon);
    });
    games.forEach((element, index) => {
        element.id = `g${index + 1}`;
        element.addEventListener('click', gameInfo);
    });
    if (document.URL.includes("add.html")) {
        addGameOptions(gameNames);
        let submit = document.getElementById('add-game-submit');
        submit.addEventListener('click', async e => {
            let gameSelect = document.getElementById('gameSelect');
            let price = document.getElementById('add-game-price').value;
            let condition = document.getElementById('conditionSelect');
            let selectedCondition = condition.options[condition.selectedIndex].text;
            let selectedGame = gameSelect.options[gameSelect.selectedIndex].text;
            const listing = await crud.createListing(selectedGame, price, selectedCondition);
        });
    }
    if (document.URL.includes("groups.html")) {
        addCommunities(document.getElementById('ul'));
    }
    if (document.URL.includes("register.html")) {
        document.getElementById("add-game-submit").addEventListener('click', register);
    }
}

let icons = [];
let games = [];
let gameNames = {};
let loggedIn = false;

async function init() {
    icons = document.querySelectorAll(".icon");
    games = document.querySelectorAll(".game");
    let rentals = await crud.readRentals();
    console.log(rentals);
    // Need to add some way of storing the names of the games that are on the discover page, this is just temporary.
    gameNames = {
        'g1': "God of War",
        'g2': "Fifa 21",
        'g3': "Pokemon - Legends of Arceus",
        'g4': "Elden Ring",
        'g5': "Spider-Man: Miles Morales",
        'g6': "Super Mario Party",
    }
}

function activateIcon() {
    let location;
    if (this.id === "user") {
        if (loggedIn) {
            location = "loggedin.html";
        }
        else {
            location = "login.html";
        }
    }
    else {
        location = this.id + ".html";
        window.location.href = location;
    }
}

async function register() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let userAuth = {
        'username': username,
        'password': password,
        'email': email
    };
    console.log("hi");
    let res = await crud.createUser(userAuth);
    
    if (!res.ok) {
        if (res.error === 'user exists') {
            window.alert('User already exists');
        }
        else {
            window.alert('Something went wrong');
        }
    }
    else {
        window.location.href = 'login.html';
    }
}

async function gameInfo() {
    let gameDetails = await crud.getGameDetails(this.id);
    console.log(gameDetails);
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

    gameHead.innerHTML = gameNames[this.id]

    let gameDis = document.createElement("h2");
    gameDis.innerHTML = gameDetails["description"];

    let gameGroup = document.createElement("button");
    gameGroup.innerHTML = "Join Community";
    gameGroup.id = 'join-community';
    let gameName = gameNames[this.id]

    gameGroup.addEventListener('click', async e => {
            let res = await crud.createCommunity(gameName);
            if (!res.ok) {
                if (res.error === 'Already in this community') {
                    window.alert('You are already in this community!');
                }
            else{
                window.location.href = 'groups.html';
            }
        }
        
        

        
        // addCommunities(document.getElementById('ul'));
    });
    // gameGroup.classList.add("link");

    let exit = document.createElement("div");
    exit.innerHTML = "X";
    exit.classList.add("exit");

    exit.addEventListener('click', () => document.getElementById("gameCard").remove());

    let list = document.createElement("div");
    list.classList.add('list-wrapper');
    addRentals(list, gameNames[this.id]);

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

async function addRentals(parent, game) {
    // let rentals = [{price: "$3", condition: "fair", seller: "Pacific 3/5"}, {price: "$5", condition: "mint", seller: "Iris 4/5"}, {price: "$3", condition: "fair", seller: "Pacific 3/5"}, {price: "$5", condition: "mint", seller: "Iris 4/5"}];

    const rentals = await crud.readListings(game);

    rentals.forEach(i => {
        let listing = document.createElement("div");
        listing.classList.add("listing");

        let price = document.createElement("div");
        // price.innerHTML = "Price: " + i["price"];
        price.innerHTML = `Price: $${i["price"]}`;

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

function addGameOptions(gameNames) {
    let gameSelect = document.getElementById('gameSelect');
    for (let id in gameNames) {
        gameSelect.options.add(new Option(gameNames[id], id))
    }
}

async function addCommunities(parent) {

    let communities = await crud.readCommunities();

    communities.forEach((community, i) => {
        let list = `
            <div class="card w-100 mb-5 card-color card-outline">
                <h4 class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <i class="fas fa-user-alt"></i> ${community}
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-lg"><i class="fa-solid fa-message" aria-hidden="true"></i> <input
                            type="file" hidden>
                        </button>
                        <button type="button" class="btn btn-lg"><i class="fa fa-headphones" aria-hidden="true"></i> <input
                            type="file" hidden>
                        </button>
                        <button type="button" class="btn btn-lg" id="delete-community-${i}"><i class="fa fa-trash" aria-hidden="true"></i> <input
                            type="file" hidden>
                        </button>
                    </div>
                </h4>
            </div>
        `  
        let li = document.createElement('li');
        li.innerHTML = list;
        parent.appendChild(li);
        const deleteCommunity = document.getElementById(`delete-community-${i}`);
        deleteCommunity.addEventListener('click', async (e) => {
            parent.removeChild(li);
            await crud.deleteCommunity(community);
        });
    })
}



