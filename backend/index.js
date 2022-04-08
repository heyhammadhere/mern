const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
const volleyball = require("volleyball");
const PORT = 3000;

// Middlewares Start
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(volleyball);
// Middlewares End

// Routes Start
// Routes End

app.listen(3000);
