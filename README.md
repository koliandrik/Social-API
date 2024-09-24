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
  - `GET /api/users` - Get all users
  - `GET /api/users/:id` - Get single user
  - `POST /api/users` - Create user
  - `PUT /api/users/:id` - Update user
  - `DELETE /api/users/:id` - Delete user

- **Post Routes**
  - `POST /api/thoughts` - Create a new thought
  - `GET /api/thoughts` - Get all thoughts
  - `GET /api/thoughts/:id` - Get a single thought
  - `PUT /api/thoughts/:id` - Update a thought
  - `DELETE /api/thoughts/:id` - Delete a thought

- **Interaction Routes**
  - `POST /api/thoughts/:id/reactions` - Comment on a thought
  - `DELETE /api/thoughts/:id/reactions/:reactionid` - Delete a thought
  - `POST /api/users/:userId/friends/:friendId` - Become friends
  - `Delete /api/users/:userId/friends/:friendId` - Delete a friend

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact [koliandrik@gmail.com].

## Repository

https://github.com/koliandrik/Social-API

## Demo

https://drive.google.com/file/d/1dGVh1AEJYsXBixNFTWR39UzNmbHypXIs/view?usp=sharing

## Screenshots

![alt text](<images/Screenshot 2024-09-24 151333.png>) ![alt text](<images/Screenshot 2024-09-24 151402.png>) ![alt text](<images/Screenshot 2024-09-24 151412.png>) ![alt text](<images/Screenshot 2024-09-24 151457.png>) ![alt text](<images/Screenshot 2024-09-24 151548.png>) ![alt text](<images/Screenshot 2024-09-24 151600.png>) ![alt text](<images/Screenshot 2024-09-24 151721.png>) ![alt text](<images/Screenshot 2024-09-24 151847.png>) ![alt text](<images/Screenshot 2024-09-24 151919.png>) ![alt text](<images/Screenshot 2024-09-24 152138.png>) ![alt text](<images/Screenshot 2024-09-24 152153.png>)
