# Social API

## Description
This project is a Social API that allows users to interact with a social network platform. Users can create profiles, post updates, and interact with other users' posts.

## Features
- User authentication and authorization
- Create, read, update, and delete user profiles
- Create, read, update, and delete posts
- Like and comment on posts
- Follow and unfollow users

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/social-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd social-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Seed
    ```bash
    npm run seed
    ```
2. Start the server:
    ```bash
    npm start
    ```
3. Access the API at `http://localhost:3000`

## API Endpoints
- **User Routes**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user
  - `GET /api/users/:id` - Get user profile
  - `PUT /api/users/:id` - Update user profile
  - `DELETE /api/users/:id` - Delete user profile

- **Post Routes**
  - `POST /api/posts` - Create a new post
  - `GET /api/posts` - Get all posts
  - `GET /api/posts/:id` - Get a single post
  - `PUT /api/posts/:id` - Update a post
  - `DELETE /api/posts/:id` - Delete a post

- **Interaction Routes**
  - `POST /api/posts/:id/like` - Like a post
  - `POST /api/posts/:id/comment` - Comment on a post
  - `POST /api/users/:id/follow` - Follow a user
  - `POST /api/users/:id/unfollow` - Unfollow a user

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact [koliandrik@gmail.com].

## Repository

https://github.com/koliandrik/Social-API
