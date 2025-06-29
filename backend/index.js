require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ------------------ LOGIN EVENT MODEL -------------------
const loginEventSchema = new mongoose.Schema({
  email: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});
const LoginEventModel = mongoose.model("LoginEvent", loginEventSchema);
// --------------------------------------------------------


// ------------------ CREATE ACCOUNT ROUTE -------------------
app.post("/api/createaccount", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
      return res.status(409).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Account Created" });
  } catch (err) {
    console.error("Account creation error:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// ---------------------------------------------------


// ------------------ LOGIN ROUTE -------------------
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "All fields are required" });

  try {
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(404).json({ error: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ error: "Incorrect password" });

    // ✅ Store login event
    await LoginEventModel.create({ email });

    res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// ---------------------------------------------------


// ------- Existing Routes (unchanged) ---------------
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});
// ---------------------------------------------------


app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

app.get("/api/login", (req, res) => {
  res.send("Use POST to log in (send email + password in JSON body).");
});

mongoose.connect(uri).then(() => {
  console.log("DB connected!");
  app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
  });
}).catch(err => {
  console.error("DB connection error:", err);
});
