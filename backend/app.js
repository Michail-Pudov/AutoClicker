const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const mongoose = require("mongoose");
const cors = require("cors");
const indexRouter = require("./routes/index");
const accountRouter = require("./routes/account");
const config = require("config");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    store: new FileStore(),
    key: "user_sid",
    secret: "anything here",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 600000,
      httpOnly: false
    }
  })
);

app.use(express.static(`${__dirname}/build`));

app.use("/", indexRouter);

app.use("/account", accountRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static(path.join(__dirname, 'build')));
//   app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

const PORT = config.get("port") || 5000;

const start = async () => {
  try {
    // await mongoose.connect(config.get("mongoUri"), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // });
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    // закоментить в dev режиме этот сервер
    app.listen(process.env.PORT || 3000, () =>
      console.log(`App has been started on ${PORT}`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};
start();

module.exports = app;
