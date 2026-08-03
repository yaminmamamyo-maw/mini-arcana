const express = require ('express')
const app = express();

const cors = require('cors')


require("dotenv").config();

const readingRoutes = require("./routes/readingRoutes");


app.use(cors());
app.use(express.json());

app.use(
    "/api/readings",
    readingRoutes
);

app.get('/', (req, res) => {
    res.send(
        "Arcana API running"
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});