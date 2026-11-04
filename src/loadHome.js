import createElement from './createHtmlElement.js';
import appendElements from './appendElements.js';
import restaurantImg from './restaurant.png';

export const loadHome = () => {
    const homepageDiv = createElement("div", "home-container");
    const elementsArray = [];
    let welcomeMessage = createElement("h1", "welcome-message", "Welcome to Les Pizzables");
    let restaurantImage = createElement("img", "restaurant-image");
    let introMessage = createElement("h4", "intro-message", "Handmade pizzas cooked with care at prices you'll love.");
    let homeBodyText = createElement("p", "", "At Les Pizzables, we've been making pizzas in traditional brick ovens since the 1950s. Our founder, P. Zer, was raised in Naples, Italy, and grew up on a diet of almost exclusively pizza. This childhood experience taught P. Zer all the secrets behind pizza making, and he brings that taste worldwide through Les Pizzables.")

    restaurantImage.src = restaurantImg;
    restaurantImage.alt = "A photo of the Les Pizzables restaurant."
    elementsArray.push(welcomeMessage, restaurantImage, introMessage, homeBodyText);

    return appendElements(homepageDiv, elementsArray);
}