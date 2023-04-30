const express = require("express");
const uuid = require("uuid");
const httpContext = require("express-http-context");
const cors = require("cors");

app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(httpContext.middleware);
// Run the context for each request. Assign a unique identifier to each reqest
app.use(function (req, res, next) {
  httpContext.set("reqId", uuid.v1());
  next();
});

const path = require("path");
const config = require("config");
const logger = require("./startup/logging");

app.use(express.static(path.join(__dirname, "public")));
// const sspi = require('./startup/sspi');
// app.use(sspi);
require("./startup/routes")(app);

process.on("unhandledRejection", (reason, p) => {
  throw reason;
});

process.on("uncaughtException", (error) => {
  logger.error("unhandled rejection: " + error, error);
});

//use env port if defined, config.get will find available port
const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  logger.info(`Service is running. Listening on port ${port}`)
);

module.exports = server;
