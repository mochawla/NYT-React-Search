const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

//TODO move db stuff out
//define the database
const db = require("./models")


// Define API routes here

//POST Route
app.post("/api/saved", (req, res) => {
  //get posted object
  var article = req.body;

  //call db.article.create & return json
  db.create.Article(article)
  .then(() => {
  res.json(article)
  })
  .catch((err) => {
  res.json(err)
  })

});

//GET Route
app.get("/api/saved", (req, res) => {
  db.Article.find({}).then(articles => res.json(articles))
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
