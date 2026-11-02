import createElement from './createHtmlElement.js';
import appendElements from './appendElements.js';

export const loadHome = () => {
    const homepageDiv = createElement("div", "home-container");
    const elementsArray = [];
    let welcomeMessage = createElement("h1", "welcome-message", "Welcome to Les Pizzables");
    let introMessage = createElement("p", "intro-message", "Handmade pizzas cooked with care at prices you'll love.");

    elementsArray.push(welcomeMessage, introMessage);

    return appendElements(homepageDiv, elementsArray);
}