"use strict";
const express = require("express");
const cors = require("cors");

// Get routes to the variabel
require("dotenv").config();
const route = require("./src/routers");
const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());

// Add endpoint grouping and router
app.use("/api/todo/", route);

app.listen(port, () => console.log(`Listening on port ${port}!`));
