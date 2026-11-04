import createElement from './createHtmlElement.js';
import appendElements from './appendElements.js';

export const loadReservation = () => {
    const homepageDiv = createElement("div", "reservation-container");
    const reserveHeading = createElement("h2", "", "Make a Booking");
    const reserveDesc = createElement("p", "", "If you would like to make a reservation at our restaurant, please complete the form below. Your reservation is only confirmed upon receiving an email receipt. Because our restaurant doesn't exist, you will never receive this receipt, so please just pretend that you received it.");
    homepageDiv.appendChild(reserveHeading);
    homepageDiv.appendChild(reserveDesc);
    const elementsArray = [];

    let form = createElement("form");
    const nameLabel = createElement("label", "form-label", "Name:");
    const name = createElement("input",);
    const guestsLabel = createElement("label", "form-label", "Number of Guests:");
    const guests = createElement("input");
    const calendarLabel = createElement("label", "form-label", "Date:");
    const calendar = createElement("input");
    const emailLabel = createElement("label", "form-label", "Email:");
    const email = createElement("input");
    const submitBtn = createElement("button", "submit-btn", "Book");

    name.type = "text";
    name.id = "form-name";
    name.required = "required";
    nameLabel.for = "form-name";
    guests.type = "number";
    guests.id = "form-guests";
    guests.required = "required";
    guests.min = "1";
    guests.max = "10";
    guests.placeholder = 1;
    guestsLabel.for = "form-guests";
    calendar.type = "date";
    calendar.id = "form-calendar";
    calendar.required = "required";
    calendarLabel.for = "form-calendar";
    email.type = "email";
    email.id = "form-email";
    email.required = "required";
    emailLabel.for = "form-email";


    elementsArray.push(nameLabel, name, guestsLabel, guests, calendarLabel, calendar, emailLabel, email, submitBtn);
    form = appendElements(form, elementsArray);

    homepageDiv.appendChild(form);

    return homepageDiv;
}