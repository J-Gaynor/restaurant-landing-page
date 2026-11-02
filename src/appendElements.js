export default function (targetElement, array) {
    array.forEach(element => {
        targetElement.appendChild(element)
    });
    return targetElement;
}