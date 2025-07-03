# 📈 Aconova – Full-Stack Stock Market Dashboard

**Aconova** is a sleek and responsive stock market dashboard built using the MERN stack (MongoDB, Express, React, Node.js).  
It offers a fresh, intuitive platform where users can create accounts, track live stock data, and place Buy/Sell orders — all seamlessly managed and stored in MongoDB.

---

## 📖 Introduction

**Aconova** is more than just a stock dashboard — it represents **a new beginning** in how we interact with financial markets.  
Built with clarity, responsiveness, and modern tech in mind, Aconova offers a clean and intuitive interface for tracking stocks, placing orders, and managing trades in real-time.

The name **Aconova** combines **Aco** (symbolizing accuracy, action, or account) with **Nova** — Latin for *new star*.  
Together, they define **Aconova as a fresh, powerful start for personal trading platforms** — a modern-day alternative to bulky and cluttered tools.

Inspired by platforms like Zerodha, Groww, and Kite, Aconova is designed for:

- 🧑‍💻 Developers building trading UIs  
- 📚 Students creating full-stack projects  
- 🔁 Prototyping fintech tools  
- 💡 Learning real-world MERN architecture

---

## 🚀 Features

- 📊 Real-time market watchlist with prices and trend icons  
- 📉 Doughnut chart for stock data visualization  
- 🛒 Intuitive Buy/Sell order windows (mobile + desktop)  
- 🔐 Secure Sign Up / Login with JWT & bcrypt  
- 💾 Order history stored in MongoDB  
- 📱 Fully responsive user interface  
- 🌐 RESTful APIs for order and user management

---

## 🧰 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Chart.js (Doughnut chart)
- Material UI Icons

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js (Password hashing)

### Database
- MongoDB Atlas
- Mongoose ODM

---

## 📁 Project Structure

aconova/
├── frontend/ # React frontend
│ ├── components/ # Login, Signup, Dashboard 
│ ├── data/
│ └── index.js
├── dashboard/ 
│ ├── components/ (WatchList, BuyActionWindow, etc.)
│ ├── App.js
│ └── index.js
├── server/ # node + MongoDB backend
│ ├── routes/ # Auth and Order APIs
│ ├── models/ # Mongoose schemas for User, Order
│ ├── schemas/ 
│ └── index.js # Server entry point
├── .env # Environment variables
└── README.md

---

## 📦 API Endpoints

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | /signup            | Register new user                    |
| POST   | /login             | Authenticate user, return JWT token  |
| POST   | /newOrder          | Submit Buy/Sell order                |
| GET    | /orders/:userId    | Fetch orders placed by a user        |

---

## 🔐 Example: User Signup Payload

{
  "email": "user@example.com",
  "password": "password"
}

---

## 🛒 Example: Order Payload

{
  "name": "INFY",
  "qty": 5,
  "price": 1520,
  "mode": "BUY"
}

---

## 🧑‍💼 User Flow

### 🔐 1. Sign Up or Log In
- Users register with an email and password.
- Passwords are hashed securely using **bcrypt** before storage.
- Upon successful login, the backend returns a signed JWT token for session management.

### 📊 2. Access Dashboard
- After login, users are taken to a clean, responsive stock watchlist interface.
- Each stock displays its name, live price, percentage change, and trend indicators (up/down arrows).

### 🛒 3. Place Orders
- Clicking the **Buy** or **Sell** button opens the **BuyActionWindow**.
- Users enter stock quantity and price.
- Orders are submitted via **Axios** POST requests to the backend API.
- Orders are validated and stored in MongoDB.

### 💾 4. Order Storage Format (MongoDB)

{
  "userId": "64e19f98ab12345678cfa12b",
  "name": "RELIANCE",
  "qty": 10,
  "price": 2835.5,
  "mode": "BUY",
  "createdAt": "2025-07-03T12:45:00Z"
}

---

## 🔧 How to Run Locally

### 1. Clone the Repository

git clone https://github.com/yourusername/aconova.git
cd aconova

### 2. Install Dependencies

### Backend

cd server
npm install

### Frontend

cd ../frontend
npm install

### 3. Start the Development Servers

### Start Backend

npm start

### Start Frontend

npm run dev
Now open http://localhost:3000

---

## 🌍 Deployment

### Platform	Purpose                URL
Render	      Frontend (React)       https://aconova.onrender.com
Render 	      Backend (Node.js)      https://aconova-backend1.onrender.com
Render        Dashboard              https://aconova-dashboard.onrender.com
MongoDB     	Database (cloud)

---

## 🔮 Future Enhancements

✅ Sell order support

✅ Order history tab

🔄 Real-time price updates via WebSockets

📊 Portfolio performance graph

📧 Email confirmations after each trade

🔐 Forgot password / Reset email flow

📎 PDF invoice generation per order

---

## 👨‍💻 Author

Abhishek P.
React Developer | Full Stack Developer | 

**GitHub**: https://github.com/abhishekpnaik05

**LinkedIn**: www.linkedin.com/in/abhishekpnaik

**Email**: abhishekpnaik05@gmail.com

---

## 📄 License

This project is licensed under the MIT License.

Made with 💙 using **React**, **Node.js**, **Express**, and **MongoDB** — for traders, learners, and builders alike.
