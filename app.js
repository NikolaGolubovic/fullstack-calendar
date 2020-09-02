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

app.use(middleware.errorHandler);

module.exports = app;
