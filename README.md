
# 🧩 Simple RESTful API with Node.js & Express

This is a basic RESTful API built using Node.js and Express that supports full CRUD (Create, Read, Update, Delete) operations for a user resource.

## 🚀 Features

- Create a new user
- View all users
- Get a user by ID
- Update user details
- Delete a user
- In-memory storage (no database)

## 📁 Project Structure

```

.
├── index.js         # Main entry point
├── package.json     # Project metadata & dependencies

````

## 🛠️ Technologies Used

- Node.js
- Express.js

## 📦 Installation

```bash
git clone https://github.com/nandkumar1000/Celebal-w-6
npm install
````

## ▶️ Running the Server

```bash
node index.js
```

Server runs at:

```
http://localhost:3000
```

## 📮 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/`          | Welcome route     |
| POST   | `/users`     | Create new user   |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get user by ID    |
| PUT    | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |

## 📬 Sample JSON for POST/PUT

```json
{
  "name": "Nand Kumar",
  "email": "nand@example.com"
}
```

## 🧪 Testing

Use [Postman](https://www.postman.com/) or `curl` to test endpoints.
Example:

```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name":"Nand Kumar","email":"nand@example.com"}'
```

## ⚠️ Notes

* This project uses in-memory storage (data resets on server restart).
* Ideal for beginners to learn Express routing and REST concepts.

---

