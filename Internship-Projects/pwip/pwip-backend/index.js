var express = require("express");
var cors = require('cors');
var path = require('path');
var allRoutes = require("./routes/routeDefination")


const app = express();


app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/api', allRoutes.users);





app.get("/api", (req, res) => {
  res.send("Welcome to PwipBackend");
});




const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
