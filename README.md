# 📢 Notification Service

A simple backend project to send notifications to users via **Email**, **SMS**, or **In-App messages**.

## 🚀 Features

- ✅ Send a notification to a user
- ✅ Get all notifications for a user
- ✅ Supports 3 types of notifications:
  - 📧 Email
  - 📱 SMS
  - 💬 In-App

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript (ES6)
- Postman (for API testing)

---

## 📁 Project Structure

```

notification-service/
├── controllers/
│   └── notificationController.js
├── routes/
│   └── notificationRoutes.js
├── services/
│   └── notificationService.js
├── index.js
├── package.json
└── README.md

````

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Harsh-19vks/notification-service.git
cd notification-service
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

Server will be running at `http://localhost:3000`

---

## 📬 API Endpoints

### Send Notification

**POST** `/notifications`

**Request Body:**

```json
{
  "userId": "123",
  "message": "Hello from the team!",
  "type": "email"
}
```

* `type` can be `"email"`, `"sms"`, or `"in-app"`

---

### Get Notifications for a User

**GET** `/notifications/user/:id`

Returns all notifications sent to the user with the specified ID.

---

