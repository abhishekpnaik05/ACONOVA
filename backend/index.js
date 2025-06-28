require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ------------------ DATABASE MODELS -------------------
// Login Event Model
const loginEventSchema = new mongoose.Schema({
  email: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});
const LoginEventModel = mongoose.model("LoginEvent", loginEventSchema);

// ------------------ ROUTES -------------------

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Trading API is running",
    endpoints: {
      auth: [
        "POST /api/auth/register",
        "POST /api/auth/login"
      ],
      data: [
        "GET /api/data/holdings",
        "GET /api/data/positions",
        "POST /api/data/orders"
      ]
    }
  });
});

// Authentication Routes
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ 
      status: "error",
      error: "All fields are required" 
    });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ 
        status: "error",
        error: "User already exists" 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ 
      status: "success",
      message: "Account created successfully" 
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ 
      status: "error",
      error: "Internal server error" 
    });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      status: "error",
      error: "All fields are required" 
    });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        status: "error",
        error: "User not found" 
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ 
        status: "error",
        error: "Invalid credentials" 
      });
    }

    await LoginEventModel.create({ email });
    
    res.status(200).json({ 
      status: "success",
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ 
      status: "error",
      error: "Internal server error" 
    });
  }
});

// Data Routes
app.get("/api/data/holdings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json({
      status: "success",
      data: allHoldings
    });
  } catch (err) {
    console.error("Holdings error:", err);
    res.status(500).json({
      status: "error",
      error: "Failed to fetch holdings"
    });
  }
});

app.get("/api/data/positions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json({
      status: "success",
      data: allPositions
    });
  } catch (err) {
    console.error("Positions error:", err);
    res.status(500).json({
      status: "error",
      error: "Failed to fetch positions"
    });
  }
});

app.post("/api/data/orders", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).json({
      status: "success",
      message: "Order created successfully",
      data: newOrder
    });
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({
      status: "error",
      error: "Failed to create order"
    });
  }
});

// ------------------ DATABASE CONNECTION -------------------
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });