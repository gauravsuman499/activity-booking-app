
# Basic Activity Booking App Backend

This is a simple REST API backend for a Basic Activity Booking App built with Node.js, Express.js, and MongoDB. It supports user registration/login, activity listing, activity booking, and retrieving user bookings.

## Features

- User registration and login with JWT authentication
- Create and list activities
- Book activities (only for logged-in users)
- View bookings made by the logged-in user
- Validation with express-validator
- Password hashing with bcrypt

## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- express-validator for validation
- bcrypt for password hashing

## Folder Structure

```
.
|── controllers
|── middlewares
|── models
|── routes
|── validators
|── .env
|── app.js
|── package.json
|── README.md
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas URI

### Clone the repository

```bash
git clone https://github.com/yourusername/activity-booking-app.git
cd activity-booking-app
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env` file in the root and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the project

```bash
npm start
```

Your server should now be running on `http://localhost:5000`

## API Endpoints

### Auth

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Activities

- `GET /api/activities` - List all activities
- `POST /api/activities` - Create activity (requires token)

### Bookings

- `POST /api/bookings/:activityId` - Book an activity (requires token)
- `GET /api/bookings` - Get user bookings (requires token)

## Postman Collection

Use the provided Postman collection to test all the APIs.

## Deployment

You can deploy this project for free using platforms like **Render**.

1. Push your code to GitHub
2. Create a Web Service in Render and connect your repo
3. Set environment variables in Render's dashboard
4. Render will auto-build and deploy your backend

---

For any issues, feel free to open an issue or PR.
