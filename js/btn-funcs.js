'use strict'

let gPrevClicked = null;
let isModalOpen = false;

function onMenuClicked(clickedLink) {
    clickedLink.classList.add('clicked-link')

    if (!gPrevClicked) gPrevClicked = clickedLink;
    else {
        gPrevClicked.classList.remove('clicked-link');
        gPrevClicked = clickedLink;
    }
}


function toggleMenu() {
    if (isModalOpen) return;
    document.body.classList.toggle('open-menu');
}


function openReadModal() {
    document.querySelector('.read-modal').classList.add('show-modal')
    document.body.classList.toggle('show-modal');
    isModalOpen = true;
}

function closeReadModal() {
    document.body.classList.toggle('show-modal');
    document.querySelector('.read-modal').classList.remove('show-modal')
    isModalOpen = false;
}

