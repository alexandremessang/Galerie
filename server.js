const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

let favoris = [];
app.use(express.json({type: '*/*'}));
app.use(cors());
app.get("/favoris", (request, response) => {
 response.send(favoris);
});
app.post("/favoris", (request, response) => {
    fconsole.log(request.body);
    favoris = JSON.stringify(request.body);
    console.log(favoris)
    response.json(favoris);
});
app.listen(port, err => {
 console.log(`server is listening on ${port}`);});