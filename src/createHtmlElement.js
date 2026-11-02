export default function createElement(tag, className, text = "") {
    let element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}