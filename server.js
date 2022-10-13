const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const InitiateMongoServer = require("./config/config");
const route = require("./routes/route");

const app = express();

InitiateMongoServer();

// PORT
const PORT = process.env.PORT || 4000;
app.use(cors());
// Middleware
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "API Working" });
});
app.use("/api", route);

app.listen(PORT, (req, res) => {
console.log(`Server Started at PORT ${PORT}`);
});