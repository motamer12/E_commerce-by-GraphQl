# GraphQL E-Commerce API

This project is a **GraphQL-based API** for an **E-Commerce system**, built using **Node.js, Express, MongoDB (Mongoose), and GraphQL**. It includes user authentication, product and category management, shopping cart functionality, and order processing.

## 📌 Features
- **User Management** (Sign up, login, etc.)
- **Product Management** (Add, update, delete, list products)
- **Category Management** (Categories linked with products)
- **Shopping Cart** (Add, update, remove items, clear cart)
- **Order Processing** (Create orders, track status)
- **GraphQL API** with Queries and Mutations
- **MongoDB Database** using Mongoose

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root folder and add the following:
```env
PORT=3000
DATA_URL=your_mongodb_connection_string
```

### 4️⃣ Run the Project
```bash
npm start
```
The server will run at **http://localhost:3000/**

---

## 📌 Project Structure
```
GraphQl_pro/
│── index.js                 # Main entry point
│── .gitignore               # Git ignore file
│── package.json             # Project dependencies
│── package-lock.json        # Dependency lock file
│── README.md                # Project documentation
│
├── src/
│   ├── GraphQl/
│   │   ├── mutation/        # GraphQL Mutations
│   │   │   ├── cartMutation.js
│   │   │   ├── categoryMutation.js
│   │   │   ├── orderMutation.js
│   │   │   ├── productMutation.js
│   │   │   ├── userMutation.js
│   │   ├── queries/         # GraphQL Queries
│   │   │   ├── cartQueries.js
│   │   │   ├── categoryQueries.js
│   │   │   ├── orderQueries.js
│   │   │   ├── productQueries.js
│   │   │   ├── userQueries.js
│   │   ├── types/           # GraphQL Types
│   │   │   ├── cartTypes.js
│   │   │   ├── categoryTypes.js
│   │   │   ├── orderTypes.js
│   │   │   ├── productTypes.js
│   │   │   ├── userTypes.js
│   │   ├── schema.js        # GraphQL Schema
│   ├── dataBase/
│   │   ├── dbConnection.js  # MongoDB Connection
│   │   ├── models/          # Database Models
│   │   │   ├── cart.model.js
│   │   │   ├── category.model.js
│   │   │   ├── order.model.js
│   │   │   ├── product.model.js
│   │   │   ├── user.model.js
```
---

## 🔧 GraphQL API Overview

### 🔍 Queries
- **Get all products**
- **Get product by ID**
- **Get all categories**
- **Get all users**
- **Get cart for a user**
- **Get orders**

### 🔧 Mutations
- **Add, Update, Delete** users
- **Add, Update, Delete** products
- **Add, Update, Delete** categories
- **Add, Update, Remove items in Cart**
- **Create Orders**

---

## 💻 Deployment & GitHub Setup

### 📌 Git Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 📌 Next Steps
- ✅ Implement Authentication
- ✅ Add Payment Integration
- ✅ Improve Error Handling

This project is a great foundation for an **E-Commerce GraphQL API**. Feel free to contribute! 🚀

