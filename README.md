


# NowDigitalEasy-Backend

This project is a Node.js application for managing users.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)
- [Tech Stack](#tech-stack)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MSaifKhan01/NowDigitalEasy-Backend.git
```

2. Install dependencies:

```bash
cd NowDigitalEasy-Backend
npm install
```

3. Create a `.env` file in the root directory and add the necessary environment variables:

```
port=5038
Url=your_mongo_db_uri
```



## Usage

Run the application:

```bash
npm start
```
## Tech Stack

- Node.js
- Express
- MongoDB
- Swagger
- REST API
- CORS



Visit [http://localhost:5038](http://localhost:5038) in your browser.

## Documentation

### Swagger UI

Explore the API using Swagger UI. Visit [http://localhost:5038/docs](http://localhost:5038/docs) for interactive documentation.

## Routes

- **GET /docs**: Swagger UI documentation
- **GET /**: Home Page
- **POST /user/AddUser**: Add a new user
- **GET /user/AllUsers**: Get all users
- **GET /user/SingleUser/:id**: Get a specific user
- **DELETE /user/RemoveUser/:id**: Remove a user
- **PUT /user/UserUpdate/:id**: Update a user








