# 📈 ACONOVA - Full-Stack Stock Market Dashboard

![MERN Stack](https://img.shields.io/badge/Stack-MERN-00D8FF?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![Chart.js](https://img.shields.io/badge/Charts-Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

**ACONOVA** is a sleek, modern, and responsive stock market dashboard built with the MERN stack. It offers an intuitive platform where users can create accounts, track live stock data, manage watchlists, and place Buy/Sell orders — all seamlessly integrated with MongoDB for robust data management.

[![Live Demo](https://img.shields.io/badge/Live_Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://aconova.onrender.com) [![GitHub Repo](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhishekpnaik05/ACONOVA)

## 📋 Table of Contents

- [🌟 About ACONOVA](#-about-aconova)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🏗 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🌐 Deployment](#-deployment)
- [🎯 Usage Guide](#-usage-guide)
- [🧪 Testing](#-testing)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [🔮 Roadmap](#-roadmap)
- [📄 License](#-license)

## 🌟 About ACONOVA

**ACONOVA** represents **a new beginning** in financial market interaction. The name combines **"Aco"** (symbolizing accuracy, action, and account) with **"Nova"** — Latin for *new star*. Together, they define ACONOVA as a fresh, powerful platform for modern trading interfaces.

### 🎯 Purpose & Inspiration
Built with clarity, responsiveness, and modern technology in mind, ACONOVA offers a clean alternative to bulky and cluttered trading tools. Inspired by platforms like Zerodha, Groww, and Kite, it's designed for:

- 🧑‍💻 **Developers** building trading UIs and fintech applications
- 📚 **Students** learning full-stack development with real-world projects
- 🔁 **Prototyping** modern fintech tools and trading platforms
- 💡 **Learning** industry-standard MERN architecture and best practices

### 🌈 Key Differentiators
- **Modern UI/UX**: Clean, intuitive interface with responsive design
- **Real-time Data**: Live stock tracking with visual trend indicators
- **Secure Authentication**: JWT-based security with password encryption
- **Scalable Architecture**: Built for growth and easy feature expansion

## ✨ Features

### 🔒 Authentication & Security
- **JWT Token Authentication** - Secure session management
- **Password Encryption** - bcrypt.js hashing for user safety
- **Protected Routes** - Authenticated access control
- **Session Persistence** - Seamless user experience across sessions

### 📈 Trading & Market Data
- **Interactive Stock Watchlist** - Real-time price monitoring
- **Buy/Sell Orders** - Complete order placement system
- **Price Trend Indicators** - Visual up/down trend markers
- **Percentage Change Display** - Live market movement tracking
- **Order History** - Complete transaction record keeping

### 📊 Data Visualization
- **Interactive Charts** - Chart.js powered visualizations
- **Color-coded Trends** - Intuitive green/red price indicators
- **Responsive Graphs** - Charts that adapt to screen sizes
- **Real-time Updates** - Live data visualization updates

### 🎨 User Interface
- **Responsive Design** - Mobile-first, works on all devices
- **Clean Dashboard** - Clutter-free, professional interface
- **Bootstrap Integration** - Consistent, modern styling
- **Material UI Icons** - Professional iconography
- **Intuitive Navigation** - User-friendly routing and flows

### 💾 Data Management
- **MongoDB Integration** - Robust data storage and retrieval
- **Order Validation** - Server-side data validation
- **User Profile Management** - Complete account management
- **Transaction Logging** - Comprehensive order history

## 🛠 Tech Stack

### Frontend Architecture
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **React** | ^18.2.0 | UI Framework | [React Docs](https://reactjs.org/docs/getting-started.html) |
| **React Router** | ^6.14.2 | Client-Side Routing | [React Router](https://reactrouter.com/) |
| **Chart.js** | ^4.3.0 | Data Visualization | [Chart.js](https://www.chartjs.org/) |
| **Axios** | ^1.4.0 | HTTP Client | [Axios](https://axios-http.com/) |
| **Bootstrap** | ^5.3.1 | CSS Framework | [Bootstrap](https://getbootstrap.com/) |
| **Material UI Icons** | ^5.14.10 | Icon Library | [MUI Icons](https://mui.com/material-ui/material-icons/) |

### Backend Architecture
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Node.js** | ^18.16.0 | Runtime Environment | [Node.js](https://nodejs.org/en/docs) |
| **Express.js** | ^4.18.2 | Web Framework | [Express](https://expressjs.com/) |
| **JWT** | ^9.0.1 | Authentication | [jsonwebtoken](https://jwt.io/) |
| **bcrypt.js** | ^2.4.3 | Password Hashing | [bcrypt.js](https://www.npmjs.com/package/bcryptjs) |
| **CORS** | ^2.8.5 | Cross-Origin Requests | [CORS](https://expressjs.com/en/resources/middleware/cors.html) |

### Database & Storage
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **MongoDB Atlas** | ^6.0 | Cloud Database | [MongoDB Atlas](https://www.mongodb.com/docs/atlas/) |
| **Mongoose** | ^7.5.3 | ODM Library | [Mongoose](https://mongoosejs.com/) |
| **dotenv** | ^16.3.1 | Environment Variables | [dotenv](https://www.npmjs.com/package/dotenv) |

## 🏗 Project Structure

```
ACONOVA/
├── 📁 frontend/                    # React frontend application
│   ├── 📁 components/             # Reusable UI components
│   │   ├── ⚛️ Login.jsx            # User login component
│   │   ├── ⚛️ Signup.jsx           # User registration component
│   │   └── ⚛️ Dashboard.jsx        # Main dashboard component
│   ├── 📁 data/                   # Static data and mock data
│   ├── 🎨 App.css                 # Global application styles
│   ├── ⚛️ App.js                   # Main application component
│   └── ⚛️ index.js                 # Application entry point
│
├── 📁 dashboard/                   # Dashboard-specific components
│   ├── 📁 components/             # Dashboard UI components
│   │   ├── 📊 WatchList.jsx        # Stock watchlist component
│   │   ├── 💰 BuyActionWindow.jsx  # Buy/sell order modal
│   │   ├── 📈 StockChart.jsx       # Chart visualization component
│   │   └── 📋 OrderHistory.jsx     # Transaction history component
│   ├── ⚛️ App.js                   # Dashboard application setup
│   ├── 🎨 index.css               # Dashboard-specific styles
│   └── ⚛️ index.js                 # Dashboard entry point
│
├── 📁 server/                      # Node.js backend server
│   ├── 📁 routes/                 # API route handlers
│   │   ├── 🔐 auth.js              # Authentication routes
│   │   └── 📊 orders.js            # Order management routes
│   ├── 📁 models/                 # MongoDB data models
│   │   ├── 👤 User.js              # User schema and model
│   │   └── 📋 Order.js             # Order schema and model
│   ├── 📁 schemas/                # Database schema definitions
│   ├── 🔧 middleware/             # Custom middleware functions
│   ├── ⚙️ config/                 # Configuration files
│   └── ⚛️ index.js                 # Server entry point
│
├── 📄 package.json                # Project dependencies and scripts
├── 🔒 .env.example                # Environment variables template
├── 🚫 .gitignore                  # Git ignore rules
└── 📖 README.md                   # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.16.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (or local MongoDB installation)
- **Git** for version control

### Installation Steps

#### 1. Clone Repository
```bash
# Clone the repository
git clone https://github.com/abhishekpnaik05/ACONOVA.git

# Navigate to project directory
cd ACONOVA
```

#### 2. Backend Setup
```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Start backend server
npm start
```

#### 3. Frontend Setup
```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install frontend dependencies
npm install

# Start frontend development server
npm run dev
```

#### 4. Dashboard Setup
```bash
# Navigate to dashboard directory (from project root)
cd dashboard

# Install dashboard dependencies
npm install

# Start dashboard application
npm start
```

#### 5. Access Applications
- **Frontend**: http://localhost:3000
- **Dashboard**: http://localhost:3001  
- **Backend API**: http://localhost:5000

## 🌐 Deployment

The application is fully deployed and live across multiple Render services:

### 🚀 Live Applications
- **Frontend**: [https://aconova.onrender.com](https://aconova.onrender.com)
- **Dashboard**: [https://aconova-dashboard.onrender.com](https://aconova-dashboard.onrender.com)
- **Backend API**: [https://aconova-backend1.onrender.com](https://aconova-backend1.onrender.com)

### 📍 Deployment Architecture
- **Platform**: [Render.com](https://render.com) - Multiple service deployment
- **Frontend & Dashboard**: React applications with static hosting
- **Backend**: Node.js API server with auto-deploy
- **Database**: MongoDB Atlas (Cloud)
- **SSL**: HTTPS enabled by default on all services
- **Status**: ✅ Production Ready

[![Deployed on Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

### 🔄 Continuous Deployment
- **GitHub Integration**: Automatic deployment on code push
- **Environment Management**: Separate staging and production configs
- **Health Monitoring**: Automatic service health checks
- **Rollback Support**: Quick rollback to previous versions

## 🎯 Usage Guide

### 🔐 Getting Started
1. **Visit** the live application at [aconova.onrender.com](https://aconova.onrender.com)
2. **Sign up** for a new account with your email and password
3. **Login** with your credentials to access the dashboard
4. **Explore** the stock watchlist and market data

### 📊 Using the Dashboard
1. **View Stocks** - Browse the watchlist with real-time prices
2. **Track Trends** - Monitor price changes with color-coded indicators
3. **Place Orders** - Click Buy/Sell buttons to open the order window
4. **Enter Details** - Specify quantity and price for your orders
5. **Submit Orders** - Confirm transactions to store in your history

### 💰 Order Management
- **Buy Orders**: Purchase stocks at specified prices
- **Sell Orders**: Sell stocks from your portfolio
- **Order History**: View all your past transactions
- **Order Validation**: Server-side validation ensures data integrity

### 📱 Mobile Experience
- **Responsive Design**: Optimized for mobile and tablet devices
- **Touch-Friendly**: Large buttons and intuitive touch interactions
- **Fast Loading**: Optimized performance on mobile networks

## 🧪 Testing

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd server
npm test

# Dashboard tests
cd dashboard
npm test
```

### Testing Strategy
- **Unit Tests**: Individual component and function testing
- **Integration Tests**: API endpoint and database testing  
- **User Journey Tests**: Complete user workflow testing
- **Responsive Tests**: Cross-device compatibility testing

## 📊 Performance

### Key Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.8s
- **Time to Interactive**: < 3.2s
- **Cumulative Layout Shift**: < 0.1

### Optimization Features
- **Code Splitting**: Route-based code splitting for faster loads
- **Image Optimization**: Compressed images and lazy loading
- **Caching Strategy**: Browser and server-side caching
- **Bundle Analysis**: Optimized JavaScript bundle sizes
- **CDN Integration**: Fast content delivery via Render CDN

## 🤝 Contributing

We welcome contributions from the community! Here's how to get started:

### Development Workflow
1. **Fork** the repository on GitHub
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes and commit (`git commit -m 'Add amazing feature'`)
4. **Push** to your branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request with detailed description

### Contribution Guidelines
- **Code Style**: Follow existing code patterns and ESLint rules
- **Testing**: Include tests for new features and bug fixes
- **Documentation**: Update README and comments for new features
- **Commits**: Use clear, descriptive commit messages
- **Issues**: Check existing issues before creating new ones

### Areas for Contribution
- 🐛 Bug fixes and performance improvements
- ✨ New features and enhancements
- 📖 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage improvements

## 🔮 Roadmap

### Version 1.1.0 (Current)
- [x] **User Authentication** - ✅ JWT-based login/signup
- [x] **Stock Watchlist** - ✅ Real-time price tracking  
- [x] **Order System** - ✅ Buy/sell order placement
- [x] **Order History** - ✅ Transaction history tracking

### Version 1.2.0 (Q3 2025)
- [ ] **Real-time WebSocket Updates** - Live price streaming
- [ ] **Portfolio Management** - Holdings and P&L tracking
- [ ] **Advanced Charts** - Technical analysis tools
- [ ] **Market News Integration** - Latest financial news

### Version 1.3.0 (Q4 2025)
- [ ] **Mobile App** - React Native implementation
- [ ] **Advanced Analytics** - Performance dashboards
- [ ] **Email Notifications** - Trade confirmations and alerts
- [ ] **PDF Reports** - Downloadable trading statements

### Version 2.0.0 (2026)
- [ ] **Multi-Market Support** - International stock markets
- [ ] **Social Trading** - Follow successful traders
- [ ] **AI-Powered Insights** - Machine learning recommendations
- [ ] **API Integration** - Real stock market data providers

## 👨‍💻 Author

**Abhishek P Naik**  
*Full Stack Developer | React Specialist*

Passionate about building modern, scalable web applications with cutting-edge technologies. ACONOVA represents my expertise in full-stack development and modern financial technology solutions.

### 🛠 Skills & Expertise
- **Frontend**: React, JavaScript, TypeScript, HTML5, CSS3, Bootstrap
- **Backend**: Node.js, Express.js, RESTful APIs, JWT Authentication
- **Database**: MongoDB, Mongoose, MySQL, PostgreSQL
- **DevOps**: Render, Vercel, Docker, Git, CI/CD
- **Specializations**: MERN Stack, Fintech Applications, Responsive Design

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

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ **Commercial Use** - Use in commercial projects
- ✅ **Modification** - Modify and distribute
- ✅ **Distribution** - Distribute copies
- ✅ **Private Use** - Use privately
- ❗ **Attribution Required** - Include copyright notice
- ❗ **No Warranty** - Provided "as is"

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/abhishekpnaik05/ACONOVA?style=social)](https://github.com/abhishekpnaik05/ACONOVA/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/abhishekpnaik05/ACONOVA?style=social)](https://github.com/abhishekpnaik05/ACONOVA/network/members)
[![GitHub issues](https://img.shields.io/github/issues/abhishekpnaik05/ACONOVA)](https://github.com/abhishekpnaik05/ACONOVA/issues)

**Made with 💙 using React, Node.js, Express, and MongoDB — for traders, learners, and builders alike.**

**Built with ❤️ by [Abhishek P Naik](https://abhishek-p-portfolio.onrender.com)**

</div>
