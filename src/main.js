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
    // icons.forEach(i => {i.classList.remove('icon-active')})
    // icons.forEach(i => {i.classList.add('icon')})
    // this.classList.add('icon-active')
    // this.classList.remove('icon')
    let location = this.id + ".html"
    window.location.href = location;
}