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

// fetching all users
app.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// creating new user
app.post("/createUser", async (req, res) => {
	try {
		const user = await User.create(req.body);
		const newUser = await user.save();
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// getting user through Id
app.get("/getUser/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const user = await User.findById(id);
		const newUser = await user.save();
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// updating a user
app.put("/updateUser/:id", async (req, res) => {
	const id = req.params.id;
	const { name, email, gender, age } = req.body;

	try {
		const user = await User.findByIdAndUpdate(id, { name, email, age });
		const newUser = await user.save();
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// deleting a user
app.delete("/deleteUser/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const user = await User.findByIdAndDelete(id);
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(5000, () => console.log("Server is Running at Port 5000"));
