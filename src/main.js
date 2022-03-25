window.onload = function() {
    init();
    icons.forEach(element => {
        element.addEventListener('click', activateIcon)
    });
}

let icons = [];

function init() {
    icons = document.querySelectorAll(".icon");
}

function activateIcon() {
    let location = this.id + ".html"
    window.location.href = location;
}