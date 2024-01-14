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

app.post("/createUser", (req, res) => {
	User.create(req.body)
		.then((users) => res.status(200).json(users))
		.catch((error) => res.status(500).json(error));
});

app.listen(5000, () => console.log("Server is Running at Port 5000"));
