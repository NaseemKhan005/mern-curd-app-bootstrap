const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server is Running at Port 5000"));
