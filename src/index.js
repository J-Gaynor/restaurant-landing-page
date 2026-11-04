import './styles.css';
import { loadHome } from './loadHome.js';
import { loadMenu } from './loadMenu.js';
import { loadReservation } from './loadReservation.js';

const content = document.querySelector("#content");
const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach(btn => btn.addEventListener("click", e => {
    const navTo = e.target.value.toLowerCase();
    content.replaceChildren();
    switch (navTo) {
        case "home":
            content.appendChild(loadHome());
            break;
        case "menu":
            console.log(loadMenu());
            content.appendChild(loadMenu());
            break;
        case "about":
            content.appendChild(loadAbout());
            break;
        case "reservation":
            content.appendChild(loadReservation());
            break;
        default:
            break;
    }
}))

const homepage = loadHome();
content.appendChild(homepage);