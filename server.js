const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const session = require("express-session");
const MongoStore = require("connect-mongo");

// !  process.env.MONGODB_URI not working???? possibly because atlas db is not running
const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/gitcommit_db',
  collection: "users",
});

app.use(
  session({
    secret: "Super secret secret",
    saveUninitialized: true,
    resave: false,
    store: sessionStore,
    cookie: {
      maxAge: 3600000,
    },
  })
);
// middleware to see session

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gitcommit_db",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
