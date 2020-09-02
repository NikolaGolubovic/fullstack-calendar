const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const usersRouter = require("./controllers/usersRouter");
const loginRouter = require("./controllers/loginRouter");
const eventsRouter = require("./controllers/eventsRouter");

const middleware = require("./utils/middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use(morgan("dev"));

app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/events", eventsRouter);

// let protected = ["transformed.js", "main.css", "favicon.ico"];

// app.get("*", (req, res) => {
//   let path = req.params["0"].substring(1);

//   if (protected.includes(path)) {
//     // Return the actual file(s)
//     res.sendFile(`${__dirname}/build/${path}`);
//   } else {
//     // Otherwise, redirect to /build/index.html
//     res.sendFile(`${__dirname}/build/index.html`);
//   }
// });

app.use(middleware.errorHandler);

module.exports = app;
