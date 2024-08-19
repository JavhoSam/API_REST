# API REST Example with Express.js
This project is my first approach to the world of RestfulApis through a simple app using Express JS with some basic CRUD operations
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

- ## Installation
To run this project locally, follow these steps:
1. **Clone the repository**:
    ```bash
    git clone https://github.com/JavhoSam/API_REST.git
    cd API_REST
    ```
2. **Install the required dependencies**:
    ```bash
    npm install
    ```

## Usage

1. **Run the server**:
    ```bash
    node index.js
    ```
    The server will start on port 80 (or another port you can specify on code).

2. **Access the API** using the following endpoints.

## API Endpoints

- **GET `/`**: Returns a welcome message.
  
- **GET `/api/users`**: Retrieves the list of all users.

- **GET `/api/users/:id`**: Retrieves a user by their ID.

- **POST `/api/users`**: Adds a new user to the list.

- **DELETE `/api/users/:id`**: Deletes a user by their ID.
