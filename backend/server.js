const net = require("net");

net.setDefaultAutoSelectFamily(false);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const readingRoutes = require("./routes/readingRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/readings", readingRoutes);

app.get("/", (req, res) => {
    res.send("Arcana API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});