const express = require("express");
const path = require('path');

const app = express();

// setup static and middleware (links everything within public folder)
app.use(express.static('./public'))

// One menthod of sendFile to display indexhtml other than dumping it in public folder
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, './index.html'))
// });

//will return 404 status as well as message through chaining
app.all("*", (req, res) => {
  res.status(404).send("<h1>ReSoUrCe NoT fOuNd</h1>");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
