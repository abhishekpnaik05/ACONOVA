# 📈 Aconova – Full-Stack Stock Market Dashboard

**Aconova** is a sleek and responsive stock market dashboard built using the MERN stack (MongoDB, Express, React, Node.js).  
It offers a fresh, intuitive platform where users can create accounts, track live stock data, and place Buy/Sell orders — all seamlessly managed and stored in MongoDB.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-00D8FF?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

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

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react) | 18.2.0 | UI Framework | [React Docs](https://reactjs.org/docs/getting-started.html) |
| ![React Router](https://img.shields.io/badge/React_Router-6.14.2-CA4245?logo=reactrouter) | 6.14.2 | Client-side Routing | [React Router Docs](https://reactrouter.com/) |
| ![Axios](https://img.shields.io/badge/Axios-1.4.0-5A29E4?logo=axios) | 1.4.0 | HTTP Client | [Axios Docs](https://axios-http.com/) |
| ![Chart.js](https://img.shields.io/badge/Chart.js-4.3.0-FF6384?logo=chartdotjs) | 4.3.0 | Data Visualization | [Chart.js Docs](https://www.chartjs.org/) |
| ![Material UI Icons](https://img.shields.io/badge/MUI_Icons-5.14.10-007FFF?logo=mui) | 5.14.10 | Icon Library | [MUI Icons Docs](https://mui.com/material-ui/material-icons/) |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.1-7952B3?logo=bootstrap) | 5.3.1 | CSS Framework | [Bootstrap Docs](https://getbootstrap.com/) |

### Backend
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![Node.js](https://img.shields.io/badge/Node.js-18.16.0-339933?logo=nodedotjs) | 18.16.0 | Runtime Environment | [Node.js Docs](https://nodejs.org/en/docs) |
| ![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express) | 4.18.2 | Web Framework | [Express Docs](https://expressjs.com/) |
| ![JWT](https://img.shields.io/badge/JWT-9.0.1-000000?logo=jsonwebtokens) | 9.0.1 | Authentication | [JWT Docs](https://jwt.io/) |
| ![bcrypt.js](https://img.shields.io/badge/bcrypt.js-2.4.3-00D8FF?logo=bcrypt) | 2.4.3 | Password Hashing | [bcrypt.js Docs](https://www.npmjs.com/package/bcryptjs) |
| ![CORS](https://img.shields.io/badge/CORS-2.8.5-000000?logo=cors) | 2.8.5 | Cross-Origin Resource Sharing | [CORS Docs](https://expressjs.com/en/resources/middleware/cors.html) |

### Database
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-6.0-47A248?logo=mongodb) | 6.0 | Cloud Database | [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/) |
| ![Mongoose](https://img.shields.io/badge/Mongoose-7.5.3-880000?logo=mongoose) | 7.5.3 | ODM Library | [Mongoose Docs](https://mongoosejs.com/) |
| ![Dotenv](https://img.shields.io/badge/dotenv-16.3.1-ECD53F?logo=dotenv) | 16.3.1 | Environment Variables | [Dotenv Docs](https://www.npmjs.com/package/dotenv) |

---

## ✨ Features

### Core Functionality
- **User Authentication**
  - Secure JWT token-based authentication
  - Password hashing with bcrypt.js
  - Protected routes for authenticated users only

### Trading Features
- **Stock Watchlist**
  - Real-time price updates (mock data)
  - Percentage change indicators
  - Color-coded trend visualization

### Data Management
- **Order System**
  - Buy/Sell order placement
  - Order validation
  - Transaction history storage

### UI/UX
- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
- **Data Visualization**
  - Interactive charts with Chart.js
  - Clean, intuitive dashboard

---

## 📁 Project Structure

```
aconova/
├── frontend/                # React frontend
│   ├── components/          # Login, Signup, Dashboard 
│   ├── data/
│   └── index.js
├── dashboard/              
│   ├── components/          # WatchList, BuyActionWindow, etc.
│   ├── App.js
│   └── index.js
├── server/                 # Node + MongoDB backend
│   ├── routes/             # Auth and Order APIs
│   ├── models/             # Mongoose schemas for User, Order
│   ├── schemas/            
│   └── index.js            # Server entry point
├── .env                    # Environment variables
└── README.md
```

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

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

---

## 🛒 Example: Order Payload

```json
{
  "name": "INFY",
  "qty": 5,
  "price": 1520,
  "mode": "BUY"
}
```

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

```json
{
  "userId": "64e19f98ab12345678cfa12b",
  "name": "RELIANCE",
  "qty": 10,
  "price": 2835.5,
  "mode": "BUY",
  "createdAt": "2025-07-03T12:45:00Z"
}
```

---

## 🔧 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekpnaik05/ACONOVA.git
cd aconova
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 3. Start the Development Servers

**Start Backend:**
```bash
npm start
```

**Start Frontend:**
```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment

| Platform | Purpose | URL |
|----------|---------|-----|
| Render | Frontend (React) | https://aconova.onrender.com |
| Render | Backend (Node.js) | https://aconova-backend1.onrender.com |
| Render | Dashboard | https://aconova-dashboard.onrender.com |
| MongoDB Atlas | Database (cloud) | - |

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

**Abhishek P.**  
React Developer | Full Stack Developer

## 📬 Connect With Me

<div align="center">
  <a href="https://github.com/abhishekpnaik05" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/abhishekpnaik" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="mailto:abhishekpnaik05@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://abhishek-p-portfolio.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio">
  </a>
</div>

<div align="center" style="margin-top: 20px;">
  <img src="https://github-readme-stats.vercel.app/api?username=abhishekpnaik05&show_icons=true&theme=radical" alt="GitHub Stats" width="400">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhishekpnaik05&layout=compact&theme=radical" alt="Top Languages" width="300">
</div>

---

## 📄 License

This project is licensed under the MIT License.

---

Made with 💙 using **React**, **Node.js**, **Express**, and **MongoDB** — for traders, learners, and builders alike.
