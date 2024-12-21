# ISS Tracker

This project is a simple Node.js application that tracks the distance of the International Space Station (ISS) from Berlin. It uses Express for the server, EJS for templating, and Axios to fetch the current position of the ISS.

## Features
- Calculates the Haversine distance between Berlin and the current position of the ISS.
- Displays a message indicating how close the ISS is to Berlin.
- Simple form to trigger the distance check.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/iss-tracker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd iss-tracker
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the server:
    ```sh
    node index.js
    ```
2. Open your web browser and go to `http://localhost:3000`.
3. Click the "CHECK" button to find out how close the ISS is to Berlin.

## Project Structure

## Screenshot
Here’s a screenshot of the project in action:

![Project Screenshot](public/images/Screenshot.jpg)

## Code Explanation
### `index.js`
This file sets up the Express server, handles routing, and fetches the ISS's current position using Axios. It also includes a function to calculate the Haversine distance.

### `index.ejs`
This file is an EJS template that renders the HTML content. It displays a message based on the ISS's proximity to Berlin.

### `style.css`
This file contains the styling for the HTML content.

## Dependencies
- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Body-Parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.
- [Axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.
- [EJS](https://www.npmjs.com/package/ejs): Simple templating language that lets you generate HTML markup with plain JavaScript.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

