# Drive Guardian Backendn

Welcome to the Drive Guardian user authentication backend repository – the central hub for security functionalities within the Drive Guardian application.
## Project Overview

Drive Guardian is committed to advancing road safety by addressing the global challenges of road accidents and car thefts. Our backend, powered by robust security measures, ensures a safe and secure user experience.

## Getting Started

Follow these steps to run the Drive Guardian backend on your local machine:

1. **Install Dependencies**: Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

2. **Run the Application in Development Mode**: Execute the following command to start the backend server in development mode:

    ```bash
    npm run dev
    ```

   This will launch the server and make it accessible at `http://localhost:3500` by default.

3. **Test APIs using Postman**: After successfully starting the application, you can test the APIs using [Postman](https://www.postman.com/) or your preferred API testing tool. 

#### API Routes

Explore and interact with the following API routes to manage users and authentication in the Drive Guardian backend.

##### 1. Get Users

- **Endpoint**: `GET http://localhost:3500/user/`

##### 2. Add User

- **Endpoint**: `POST http://localhost:3500/user/`
- **Request Body**: JSON object with user information (name, email, password, role)

##### 3. Get User by ID

- **Endpoint**: `GET http://localhost:3500/user/:id`
- **Replace** `:id` with the actual user ID

##### 4. Update User

- **Endpoint**: `PUT http://localhost:3500/user/:id`
- **Replace** `:id` with the actual user ID
- **Authorization**: Include a valid JWT token in the request headers

##### 5. Delete User

- **Endpoint**: `DELETE http://localhost:3500/user/:id`
- **Replace** `:id` with the actual user ID
- **Authorization**: Include a valid JWT token in the request headers

##### 6. User Login

- **Endpoint**: `POST http://localhost:3500/user/login`
- **Request Body**: JSON object with user credentials (email, password)

##### 7. Ban User (Only for Doctor Role)

- **Endpoint**: `PUT http://localhost:3500/user/ban/:id`
- **Replace** `:id` with the actual user ID
- **Authorization**: Include a valid JWT token for a user with the 'Doctor' role in the request headers

Feel free to use Postman or your preferred API testing tool to test these routes.


    Ensure you are testing on the correct endpoints, and feel free to explore and interact with the various user authentication APIs.

## Security Focus
In this repository, we prioritize backend security functionalities critical for Drive Guardian's success. The backend is designed to:

- **Protect User Credentials**: Employ state-of-the-art password hashing techniques to secure user accounts.
- **Authorize User Roles**: Implement role-based permissions to control user access and maintain a secure environment.
### Table of Contents
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [User Controller Functions](#UserControllerFunctions)
  - [AddUser](#adduser)
  - [UpdateUser](#updateuser)
  - [DeleteUser](#deleteuser)
  - [GetUsers](#getusers)
  - [GetUser](#getuser)
  - [Login](#login)
  - [BanUser](#banuser)
- [Middleware Functions](#middleware-functions)
  - [auth](#auth)
  - [isAdmin](#isadmin)
- [Request Validation Functions](#request-validation-functions)
  - [checkUserBody](#checkuserbody)
  - [checkLoginBody](#checkloginbody)
- [User Model](#user-model)  
    - [Schema](#schema)
    - [Pre-save Middleware](#pre-save-middleware)
    - [Pre-update Middleware](#pre-update-middleware)

# Authentication Middleware

This authentication middleware (`auth.js`) provides functions to verify user authentication tokens and check user roles for authorization.


## Dependencies
- `bcrypt`: Password hashing for user security.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: JSON Web Token (JWT) generation for user authentication.
- `dotenv`: Environment variable management.
- `express-validator`: A set of Express.js middlewares that wraps validator.js validator and sanitizer functions.


### Install dependencies:
npm install


## Environment Variables
Ensure that the following environment variable is set:

- `JWT_SECRET`: Secret key for JWT token generation.
- `SALT` : A numeric value used as the salt for password hashing.


## Controller Part : User
## User Controller Functions

### AddUser

The `AddUser` function is responsible for creating a new user. It checks for the uniqueness of the user's email, adds the user to the database, and returns a success message upon completion.

### UpdateUser

The `UpdateUser` function allows for updating user information based on the provided user ID. It performs validations, checks user authorization, updates the user in the database, and sends a success message upon successful completion.

### DeleteUser

The `DeleteUser` function deletes a user based on the provided user ID. It validates the ID, checks user authorization, removes the user from the database, and sends a success message upon successful deletion.

### GetUsers

The `GetUsers` function retrieves a list of all users from the database and returns the user data in JSON format.

### GetUser

The `GetUser` function retrieves a specific user's information based on the provided user ID. It validates the ID, fetches the user from the database, and returns the user data in JSON format.

### Login

The `Login` function handles user authentication by comparing the provided email and password with the stored credentials. Upon successful authentication, it generates a JWT token and sends it in the response.

### BanUser

The `BanUser` function marks a user as banned based on the provided user ID. It validates the ID, retrieves the user from the database, sets the `isBanned` property to true, and saves the updated user data. A success message is sent upon completion.


## Middleware Functions

### auth

The `auth` middleware function is responsible for verifying the authenticity of a user's access token. It checks for the presence of a valid token in the request headers, verifies the token's validity using the JWT_SECRET, and attaches the payload to the request object. If successful, it proceeds to the next middleware in the stack; otherwise, it returns a 401 Unauthorized response.

### isAdmin

The `isAdmin` middleware function checks if the authenticated user has the 'admin' or 'Doctor' role. If the user has either of these roles, the function allows access by proceeding to the next middleware in the stack. Otherwise, it returns a 401 Unauthorized response with a message indicating insufficient privileges.



---

## Request Validation Functions

### checkUserBody

The `checkUserBody` validation function ensures that the request body for user creation meets specific criteria:
- `name`: Required and cannot be empty.
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.
- `role`: Optional but, if provided, must be one of 'user', 'admin'.

If validation fails, the function returns a 400 Bad Request response with details about the validation errors.

### checkLoginBody

The `checkLoginBody` validation function ensures that the request body for user login meets specific criteria:
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

If validation fails, the function returns a 400 Bad Request response with details about the validation errors.

# User Model
The `user.js` model file defines the MongoDB schema and model for user data in the application. It utilizes Mongoose for MongoDB object modeling and includes pre-save and pre-update middleware for password hashing.


## Schema

The user schema includes the following fields:
- `name`: A required string with a minimum length of 3 characters.
- `email`: A required and unique string representing the user's email address.
- `password`: A required string with a minimum length of 6 characters.
- `role`: A string with enumerated values ['user', 'admin'], defaulting to 'user'.

## Pre-save Middleware

The pre-save middleware hashes the user's password before saving it to the database. It utilizes the bcrypt library for password hashing.

## Pre-update Middleware

The pre-update middleware hashes the updated password before applying the update. It is triggered by the findOneAndUpdate operation.

