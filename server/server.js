const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var routes = require("./routes/admin");
routes(app);

app.listen(8000, () =>
  console.log("Server is listening at https://localhost:8000")
);
