# 🚀 NASA APOD - Astronomy Picture of the Day

Welcome to the **NASA APOD** project! This web application fetches and displays the Astronomy Picture of the Day along with its details, using the [NASA APOD API](https://api.nasa.gov/?search=apod).

## 🌌 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)

## 🌠 About

The **NASA APOD** project showcases a new astronomy picture every day. Users can view the latest image along with its description, date, and other details provided by NASA's APOD API.

## 🌟 Features

- Displays the Astronomy Picture of the Day with title and description.
- Shows additional information like the picture's date and copyright.
- Responsive design for various devices.

## 🚀 Demo

Check out the live demo: [NASA APOD Demo](https://react-nasa-apod-project.netlify.app/)

## 🛠️ Technologies Used

- **React**: Frontend JavaScript library.
- **NASA APOD API**: Provides the astronomy picture and its details.
- **Fetch API**: Native JavaScript API for making HTTP requests.
- **CSS/Styled-Components**: For styling the components.

## 📦 Setup

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/akhilmw/apod-nasa-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd apod-nasa-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4. Create a `.env` file in the root directory and add your NASA API key:

    ```dotenv
    VITE_REACT_APP_NASA_API_KEY="YOUR_NASA_API_KEY_HERE"
    ```

    Replace `YOUR_NASA_API_KEY_HERE` with your actual NASA API key.

5. Start the development server:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

6. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## 📖 Usage

Once the application is running, it will fetch and display the Astronomy Picture of the Day. The page will update daily with the new picture and its information.

## 🌐 API

This project uses the [NASA APOD API](https://api.nasa.gov/planetary/apod):

- **Endpoint**: `https://api.nasa.gov/planetary/apod`
- **Parameters**:
  - `api_key`: Your NASA API key.
  - `date`: The date of the APOD in YYYY-MM-DD format (optional).

## Contributing

Contributions are welcome! Whether you want to enhance the user interface, add new features, or fix bugs, feel free to open an issue or submit a pull request.




