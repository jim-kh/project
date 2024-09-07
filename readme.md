# Welcome to My Portfolio

Welcome to my personal portfolio website. This site showcases my projects, skills, and provides a way to get in touch with me. The site is built using HTML, CSS, and Bootstrap, with a right-to-left (RTL) layout for Hebrew language support.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This portfolio site is designed to provide a comprehensive view of my professional background and skills. It includes sections for my work experience, skills, and a contact form for potential clients or employers to reach out.

## Features

- **Responsive Design**: The site uses Bootstrap to ensure it looks great on all devices, from mobile phones to desktops.
- **RTL Support**: The site layout is optimized for right-to-left languages like Hebrew.
- **Sections**:
  - **Home**: A welcoming section with a brief introduction.
  - **About**: Information about my background and skills.
  - **Projects**: A showcase of my work with logos of technologies I use.
  - **Contact**: A downloadable resume and contact information.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo
    ```

3. Open the `index.html` file in your browser to view the site.

## Usage

- **Navigation Bar**: The top navigation bar allows you to quickly jump to different sections of the site.
- **About Section**: Provides detailed information about my professional background.
- **Projects Section**: Displays logos of the technologies I work with, linking to more detailed pages or resources.
- **Contact Section**: Contains a link to download my resume and a button for direct contact.

### Example

To view the portfolio, simply open the `index.html` file in a web browser. If you wish to make changes, edit the HTML, CSS, and JavaScript files as needed. Below is an example of how the portfolio is structured:

<!-- Calculator -->
## Calculator
Features
Basic arithmetic operations: addition, subtraction, multiplication, and division.
Trigonometric functions: sine and cosine.
Error handling for invalid inputs.
## Technologies Used
HTML
CSS
JavaScript
Code Overview
JavaScript
## The JavaScript file contains the following key functions:

clearDisplay(): Clears the calculator display.
appendToDisplay(operator): Appends the given operator to the display.
calc(): Evaluates the expression in the display and updates the display with the result.
sin(): Calculates the sine of the angle in degrees and updates the display with the result.
cos(): Calculates the cosine of the angle in degrees and updates the display with the result.

<!-- Flappy Bird -->
# Game Project(Flappy Bird)

This is a simple game where the player controls a character that must avoid obstacles and pass through holes to score points.

## Features

- Randomly initializes the position of the hole.
- Updates the score each time the character successfully passes through a hole.
- Detects collisions and ends the game if the character hits an obstacle or misses the hole.
- Displays an alert with the final score when the game is over.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in your preferred web browser.
3. Use the controls to move the character and avoid obstacles.
4. The game will automatically update the score and detect collisions.

## Code Overview

### JavaScript

The JavaScript file contains the following key functions:

- `initializeHole()`: Initializes the hole's position randomly.
- Event listener for `animationiteration`: Reinitializes the hole's position and updates the score.
- Main game loop: Moves the character and checks for collisions.

<!-- weather API -->
## Weather Application
Features
Fetches weather data for a specified city.
Displays the city name, temperature, weather description, and an icon representing the weather.
Handles errors and displays appropriate messages.
## Technologies Used
HTML
CSS
JavaScript
OpenWeatherMap API
Code Overview
JavaScript
## The JavaScript file contains the following key functions:

getWeather(city): Fetches weather data for the specified city from the OpenWeatherMap API.
displayWeather(weatherData): Updates the UI with the fetched weather data or displays an error message if the data could not be fetched.

<!-- Products Shop -->
# Project Overview

This repository contains four main projects:
1. A Product Listing Page
2. A Weather Application
3. A Calculator
4. A Simple Game

## Product Listing Page

### Features

- Input fields for item name, price, availability, rating, and description.
- A button to add items to the product list.
- A responsive table to display the added products.

### Technologies Used

- HTML
- CSS
- JavaScript

### Code Overview

#### HTML

The HTML file contains the structure of the product listing page, including input fields, a button, and a table to display the products.
<!-- my account -->
# My Account

This project is a simple web application to manage financial actions such as savings and expenses. It allows users to add new actions, calculate balances, and display the current state of their account.

## Table of Contents

- Installation
- Usage
- Features
- Contributing
- License
## Usage
Fill in the fields for the type of action, description, and amount.
Click the “Add New Action” button to add the action to your account.
The balance and list of actions will be updated accordingly.
## Features
Add New Actions: Add new financial actions with a type, description, and amount.
Calculate Balance: Automatically calculate the balance based on the actions added.
Display Actions: Show a list of all actions with their details.
Error Handling: Alerts for invalid inputs such as empty fields or negative amounts.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project’s coding standards and includes appropriate tests.

<!-- manage u -->
# Task Management Application (manage U)

## Overview
This Task Management Application allows users to add, update, complete, and delete tasks. It provides a simple interface to manage tasks efficiently.

## Features
- **Add Task**: Users can add new tasks.
- **Update Task**: Users can update the description of existing tasks.
- **Complete Task**: Users can mark tasks as completed.
- **Delete Task**: Users can delete tasks.
- **Reset All Tasks**: Users can reset all tasks, clearing both active and completed tasks.

## Usage
Add a Task: Enter the task description in the input field and click the “Add Task” button.
Update a Task: Click the pencil icon next to a task to update its description.
Complete a Task: Click the checkmark icon next to a task to mark it as completed.
Delete a Task: Click the trash icon next to a task to delete it.
Reset All Tasks: Click the “Reset All” button to clear all tasks.
Code Structure
index.html: The main HTML file.
styles.css: The CSS file for styling the application.
script.js: The main JavaScript file containing the application logic.
classes/TaskManager.js: The JavaScript class managing the tasks.

<!-- Guess the Number -->
# Guess the Number Game

A simple number guessing game built using HTML, Bootstrap, and JavaScript. The goal of the game is to guess a randomly generated number between 1 and 10 in a limited number of attempts. After each guess, the user is informed whether their guess is too high, too low, or correct. The game ends when the player guesses correctly or runs out of attempts.

## Features

- Random number generation between 1 and 10.
- 5 attempts to guess the correct number.
- Feedback after each guess indicating if the guess is too high or too low.
- Displays remaining attempts after each guess.
- Option to restart the game after winning or losing.
- User input validation to ensure only numbers between 1 and 10 are allowed.

## How to Play

1. Open the game in your browser.
2. Enter a number between 1 and 10 in the input field.
3. Click the **Check** button to see if your guess is correct.
4. If your guess is too high or too low, you will be prompted to try again, and the number of remaining attempts will be updated.
5. The game ends when you guess the correct number or run out of attempts.
6. After the game ends, you can click **Start again** to play a new game.

## Code Overview

### HTML Structure

The game uses a simple HTML structure with Bootstrap for styling and FontAwesome for icons. Here's a brief overview of the important elements:

- **Input field**: The user enters their guess in the input field (`<input>` tag).
- **Check button**: The user clicks this button to check their guess.
- **Results display**: Feedback about the guess is displayed in a results section.

### JavaScript

The JavaScript code is responsible for:
- Generating a random number between 1 and 10.
- Tracking the number of attempts.
- Providing feedback after each guess.
- Disabling the input and check button when the game is over.
- Allowing the user to restart the game.

### Main Functions

- `startGame()`: Initializes a new game, generates a random number, and resets the UI.
- `check()`: Checks the user's guess and provides feedback. It also handles the game-over logic when the attempts run out.



## Dependencies

- [Bootstrap 5.3.2](https://getbootstrap.com/): For styling the game layout.
- [FontAwesome](https://fontawesome.com/): For the lightbulb icon used in the header.

<!-- Fetch to Card  -->
# Product Display with Fake Store API

This project fetches product data from the Fake Store API and dynamically generates product cards using HTML, Bootstrap, and JavaScript. Each product card contains details like the product image, title, description, price, rating, and an option to add the product to the cart.

## Features

- **Dynamic Product Fetching**: Products are retrieved from the [Fake Store API](https://fakestoreapi.com/) via a `fetch` request.
- **Responsive Product Cards**: Using Bootstrap for responsiveness, the product cards adjust to different screen sizes.
- **Product Details**: Each product card displays:
  - Product title
  - Product image
  - Product description
  - Price formatted with two decimals and a dollar sign
  - Product rating with star icons and the actual rating value
  - "Add to Cart" button (currently non-functional, for future extension)
- **Error Handling**: If the API fails to load, an error message is displayed to the user.

## How to Use

1. **Clone or Download the Project**
   - You can clone the repository or download the code as a ZIP file.

2. **Open in a Browser**
   - Simply open the `index.html` file in your browser.
   - Products will be dynamically loaded and displayed in a grid.

## Files

- `index.html`: The main file that contains the layout and logic for fetching and displaying products.
- `README.md`: This file, explaining how the project works.

## How It Works

- **Bootstrap for Layout**: The grid layout and styling are handled by [Bootstrap](https://getbootstrap.com/).
- **FontAwesome for Icons**: The star icons and currency symbols are sourced from [FontAwesome](https://fontawesome.com/).
- **JavaScript Logic**:
  - Fetches product data from the Fake Store API.
  - Uses a loop to dynamically create Bootstrap cards for each product.
  - Displays rating as star icons and handles price formatting.

### Main JavaScript Functions

1. **fetch()**: Retrieves the product data from the API.
2. **Dynamic Card Generation**: The `for` loop generates the product cards with data from the API.
3. **Error Handling**: If there's an error while fetching the data, an error message is displayed.

### Sample API URL

The project fetches data from the following API endpoint:




