const express = require("express");
const cityRoutes = require("./routes/cities");
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/cities", cityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
