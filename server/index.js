const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const User = require("./models/Users");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.get("/", async (req, res) => {
	try {
		const users = await User.find(); // Fetch all users from the database
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.post("/createUser", async (req, res) => {
	try {
		const user = await User.create(req.body);
		const newUser = await user.save();
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(5000, () => console.log("Server is Running at Port 5000"));
