import createElement from './createHtmlElement.js';
import appendElements from './appendElements.js';

class Meal {
    constructor(type, name, desc, price, calories, allergens) {
        this.type = type;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.calories = calories;
        this.allergens = allergens;
    }
}

const createMeals = () => {
    const tomatoSoup = new Meal("starter", "Tomato Soup", "Rich, creamy and smooth tomato soup made with real Italian tomatoes.", "£4.99", "Calories: 120", "");
    const focaccia = new Meal("starter", "Focaccia", "Soft, oven-baked Italian flatbread rich in olive oil, often dimpled on top and seasoned with salt, rosemary, and garlic.", "£5.99", "Calories: 320", "");

    const margerita = new Meal("main", "Margerita", "The classic. Thin base with tomato puree and cheese. Charred to just right for that blend of crisp and melting in your mouth.", "£8.99", "Calories: 800", "");
    const hamPineapple = new Meal("main", "Ham & Pineapple", "You can do better, but we won't judge. Italian pork and fresh, juicy pineapple.", "£9.99", "Calories: 960", "");
    const quattro = new Meal("main", "Quattro", "Four cheeses, amazing taste. Mozzarella, gorgonzola, fontina and parmigiano-reggiano.", "£9.99", "Calories: 1040", "");
    const bbq = new Meal("main", "Barbecue", "Sausages, ham, pepperoni and barbecue sauce on top of a thick based margerita.", "£10.99", "Calories: 1120", "");

    const brownie = new Meal("desert", "Chocolate Brownie", "Light chocolate brownie served with chocolate sauce and vanilla ice cream.", "£6.99", "Calories: 440", "");
    const bombologne = new Meal("desert", "Bombologne", "Small doughnuts filled with custard and coated in a sprinkle of sugar. Authentic Italian recipe, unmistakeable Italian taste.", "£5.99", "Calories: 360", "");

    return [tomatoSoup, focaccia, margerita, hamPineapple, quattro, bbq, brownie, bombologne];
}

const createMenuItems = dishes => {
    const menuDiv = createElement("div", "menu-container");
    const startersDiv = createElement("div", "dishes-container starters-container");
    const mainsDiv = createElement("div", "dishes-container mains-container");
    const desertsDiv = createElement("div", "dishes-container deserts-container");

    const startersHeader = createElement("h2", "menu-header", "Starters");
    const mainsHeader = createElement("h2", "menu-header", "Pizzas");
    const desertsHeader = createElement("h2", "menu-header", "Deserts");

    startersDiv.appendChild(startersHeader);
    mainsDiv.appendChild(mainsHeader);
    desertsDiv.appendChild(desertsHeader);

    dishes.forEach(dish => {
        const elementsArray = []
        let dishContainer = createElement("div", "dish-container");
        const dishImage = createElement("img");
        // const dishType = createElement("p", "dish-type");
        const dishName = createElement("h3", "dish-name");
        const dishDesc = createElement("p", "dish-desc");
        const dishPrice = createElement("p", "dish-price");
        const dishCalories = createElement("p", "dish-calories");
        const dishAllergens = createElement("p", "dish-allergens");

        // dishImage
        // dishType
        dishName.textContent = dish.name;
        dishDesc.textContent = dish.desc;
        dishPrice.textContent = dish.price;
        dishCalories.textContent = dish.calories;
        dishAllergens.textContent = dish.allergens;

        elementsArray.push(dishName, dishDesc, dishPrice, dishCalories, dishAllergens)
        dishContainer = appendElements(dishContainer, elementsArray);

        if (dish.type === "starter") {
            startersDiv.appendChild(dishContainer);
        } else if (dish.type === "main") {
            mainsDiv.appendChild(dishContainer);
        } else if (dish.type === "desert") {
            desertsDiv.appendChild(dishContainer);
        }

        // menuDiv.appendChild(dishContainer);

        // return menuDiv;
    });
    menuDiv.appendChild(startersDiv);
    menuDiv.appendChild(mainsDiv);
    menuDiv.appendChild(desertsDiv);
    return menuDiv;
}

export const loadMenu = () => {
    const dishes = createMeals();
    const menuItems = createMenuItems(dishes);
    console.log(menuItems);
    const homepageDiv = document.createElement("div");

    homepageDiv.appendChild(menuItems);

    return homepageDiv;
}