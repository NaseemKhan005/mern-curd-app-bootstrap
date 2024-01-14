const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		age: Number,
		gender: String,
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
