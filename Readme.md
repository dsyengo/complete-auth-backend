# Complete Authentication Backend with Password Reset

A robust authentication system using **Node.js**, **Express**, and **MongoDB/MySQL**, featuring user registration, login, JWT-based authentication, and password reset via email.

## 📌 Features

- User Registration with password hashing (using **bcryptjs**)
- User Login with JWT (JSON Web Token) Authentication
- Secure Password Reset via OTP
- Environment-based configuration with **dotenv**
- Cross-Origin Resource Sharing (CORS) enabled
- Cookie-based session management
- Nodemailer integration for sending password reset OTP

---

## 🛠️ Project Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- MongoDB or MySQL (set your DB preference in the `.env` file)

### 1. Clone the Repository

```bash
git clone https://github.com/dsyengo/complete-auth-backend.git
cd complete-auth-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

If using **MySQL**, add these lines:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=authDB
```

### 4. Start the Server

For production:

```bash
npm start
```

For development (with **nodemon** auto-reload):

```bash
npm run start:dev
```

---

## 📚 API Endpoints

### 1. User Registration

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "your_password"
}
```

### 2. User Login

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "your_password"
}
```

**Response:**

```json
{
  "token": "your_jwt_token"
}
```

### 3. Request Password Reset (OTP Generation)

```http
POST /api/auth/request-reset
```

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

### 4. Reset Password

```http
POST /api/auth/reset-password
```

**Request Body:**

```json
{
  "otp": "123456",
  "newPassword": "new_secure_password"
}
```

---

## 🧰 Project Structure

```
.
├── controllers/          # Handles business logic (authController.js)
├── models/               # Database models (User.js)
├── routes/               # API route definitions
├── services/             # External services (email handling)
├── server.js             # Entry point of the application
└── package.json          # Project metadata and dependencies
```

---

## 📦 Dependencies

| Package         | Description                        |
| --------------- | ---------------------------------- |
| bcryptjs        | Password hashing                   |
| cookie-parser   | Parse cookies for session handling |
| cors            | Enable Cross-Origin Requests       |
| dotenv          | Environment variable management    |
| express         | Web framework                      |
| jsonwebtoken    | JWT-based authentication           |
| mongoose/mysql2 | MongoDB or MySQL integration       |
| nodemailer      | Email handling                     |
| nodemon (dev)   | Auto-restart in development mode   |

---

## 🔍 Troubleshooting

1. **Check environment variables:** Ensure all required variables are present in `.env`.

2. **Database Connection Issues:** Verify MongoDB or MySQL is running and accessible.

3. **Email Not Sent:** Ensure valid credentials for **Nodemailer** and allow less secure apps if using Gmail.

---

## 📧 Support

For issues, please raise a GitHub issue or reach out to `support@masterchiefdevs.com`.

---

## 📜 License

This project is licensed under the **ISC License**.

Happy Coding! 🚀
