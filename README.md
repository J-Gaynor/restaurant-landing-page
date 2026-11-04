# Les Pizzables - Restaurant Landing Page

A responsive restaurant landing page built with vanilla JavaScript and bundled using Webpack. This project was developed as part of The Odin Project curriculum to practice DOM manipulation, modular JavaScript using ES6 modules, and modern build tooling.

## Live Demo

[View Live Site](https://j-gaynor.github.io/restaurant-landing-page/)

## Features

- Dynamic DOM Generation: All page content and tab switching logic is generated entirely through JavaScript.
- Tab-Based Navigation: Seamless navigation between Home, Menu, About, and Reservations sections without full page reloads.
- Modular Architecture: Each page tab is encapsulated in its own module with dedicated rendering logic.
- Webpack Asset Management: Configured with HtmlWebpackPlugin, CSS/style loaders, and Webpack 5 Asset Modules for image bundling.

## Technologies Used

- JavaScript (ES6 Modules)
- HTML5
- CSS3 (Flexbox and Grid)
- Webpack 5
- Webpack Dev Server
- npm

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/J-Gaynor/restaurant-landing-page.git
   cd restaurant-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npx webpack serve
   ```
   Open your browser and navigate to `http://localhost:8080/`.

4. Build for production:
   ```bash
   npx webpack
   ```
   The bundled production files will be output to the `dist/` directory.

## Acknowledgements

- Project prompt provided by [The Odin Project](https://www.theodinproject.com/).

