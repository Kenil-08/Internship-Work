# MERN E-COMMERCE TUTORIAL

# Install Dependencies

**For Backend** - `npm i`

**For Frontend** - `cd frontend` ` npm i`

## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**
PORT=
DB_URI =
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE =
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
_fill each filed with your info respectively_

## Author

**Instagram** Click [Here](https://www.instagram.com/meabhisingh) **@meAbhiSingh**
**YouTube** Click [Here](https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw/) **6 Pack Programmer**
**LinkedIn** Click [Here](https://in.linkedin.com/in/meabhisingh) **@meAbhiSingh**
**Twitter** Click [Here](https://twitter.com/meAbhi_Singh) **@meAbhi_Singh**



# E-Commerce Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a full-featured e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It includes functionalities for product listing, user authentication, shopping cart, order management, and payment processing.

## Features

- User authentication and authorization
- Product listing and detail pages
- Shopping cart management
- Order processing and management
- Payment integration
- Admin dashboard for product and order management
- Responsive design

## Technologies Used

- **Frontend:**
  - React
  - Redux
  - React Router
  - Axios
  - Bootstrap

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT (JSON Web Tokens) for authentication

## Installation

### Prerequisites

- Node.js and npm
- MongoDB

### Backend

1. Clone the repository:

2. Navigate to the backend directory:

    ```bash
    cd e-commerce/backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `config.env` file in the `backend` directory and add the following environment variables:

    ```env
        PORT=
        DB_URI =
        STRIPE_API_KEY=
        STRIPE_SECRET_KEY=
        JWT_SECRET=
        JWT_EXPIRE=
        COOKIE_EXPIRE=
        SMPT_SERVICE =
        SMPT_MAIL=
        SMPT_PASSWORD=
        SMPT_HOST=
        SMPT_PORT=
        CLOUDINARY_NAME
        CLOUDINARY_API_KEY
        CLOUDINARY_API_SECRET
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

4. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Use `http://localhost:5000` for backend API requests.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.
