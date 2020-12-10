const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/usuario", require("./routes/usuario.routes"));
app.use("/api/producto", require("./routes/producto.routes"));
app.use("/api/categoria", require("./routes/categoria.routes"));

module.exports = app;