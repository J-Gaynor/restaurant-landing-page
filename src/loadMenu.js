class Meal {
    constructor(dish, name, desc, price, calories, allergens) {
        this.dish = dish;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.calories = calories;
        this.allergens = allergens;
    }
}

const createMeals = () => {
    const tomatoSoup = new Meal("starter", "Tomato Soup", "Rich, creamy and smooth tomato soup.", "£4.99", "120", "");
    const focaccia = new Meal("starter", "Focaccia", "Soft, oven-baked Italian flatbread rich in olive oil, often dimpled on top and seasoned with salt, rosemary, and garlic.", "£5.99", "320", "");

    const margerita = new Meal("main", "Margerita", "The classic. Thin base with tomato puree and cheese.", "£8.99", "800", "");
    const hamPineapple = new Meal("main", "Ham & Pineapple", "You can do better.", "£9.99", "960", "");
    const quattro = new Meal("main", "Quattro", "Four cheeses, amazing taste.", "£9.99", "1040", "");
    const bbq = new Meal("main", "Barbecue", "Sausages, ham, pepperoni and barbecue sauce.", "£10.99", "1120", "");

    const brownie = new Meal("desert", "Chocolate Brownie", "Light chocolate brownie served with chocolate sauce and vanilla ice cream.", "£6.99", "440", "");
    const bombologne = new Meal("desert", "Bombologne", "Small Italian doughnut filled with custard and coated in a sprinkle of sugar.", "£5.99", "360", "");
}

export const loadMenu = () => {
    createMeals();
    const homepageDiv = document.createElement("div");
    homepageDiv.textContent = "Menu";
    return homepageDiv;
}