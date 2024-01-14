const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		age: Number,
		gender: String,
	},
	{ timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
