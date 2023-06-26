const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const conn = require("./models/connectDB");
// // connect to database
const loginRouter = require("./routes/Register");
// const indexRouter = require("./routes/index");
// const postRouter = require("./routes/post");
const app = express();
app.use(cors());
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", loginRouter);
// app.use("/login", loginRouter);
// app.use("/post", postRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
module.exports = app;