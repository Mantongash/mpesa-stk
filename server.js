const express = require("express");
const dotenv = require("dotenv");
const stkRoutes = require("./src/routes/stk");
const generateToken = require("./src/helpers/generateToken");
const app = express();
dotenv.config();
const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => res.json("Welcome to the API"));
// Routes
app.use("/api", stkRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
