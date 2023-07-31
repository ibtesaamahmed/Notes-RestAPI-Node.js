// Initialization Express and App
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Connecting Database
const mongoDbPath = "Your_MongoDB_Path";
mongoose.connect(mongoDbPath).then(function () {

    // Api Connection Check (Home Route)

    app.get("/", function (req, res) {
        const response = { message: "API Works!" };
        res.json(response);
    });

    // Getting the route from /routes/noteRoute.js file

    const noteRouter = require('./routes/noteRoutes');
    app.use("/notes", noteRouter);
});

// Starting Server on a Port

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server started at Port " + PORT);
});