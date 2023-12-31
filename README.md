


# NowDigitalEasy-Backend

This project is a Node.js application for managing users.


### Backend API

For accessing the backend API, visit [Backend-API](https://nowdigitaleasy-nwwj.onrender.com).


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Routes](#routes)
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





## Documentation

### Swagger UI

Explore the API using Swagger UI. Visit [Click here to see Swagger Doc](https://nowdigitaleasy-nwwj.onrender.com/docs) for interactive documentation.

## Routes

- **GET /docs**: Swagger UI documentation
- **GET /**: Home Page
- **POST /user/AddUser**: Add a new user
- **GET /user/AllUsers**: Get all users
- **GET /user/SingleUser/:id**: Get a specific user
- **DELETE /user/RemoveUser/:id**: Remove a user
- **PUT /user/UserUpdate/:id**: Update a user








