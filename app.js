const express = require("express");
const app = express();

const productRoutes = require('./src/rest-api/routes/producs');
app.use("/products", productRoutes);

app.use((req, res, next) => {
    const error = new Error('Request Not Found...');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 405);
    res.send({
        error: error.message
    })
})

// app.use( (req, res, next) => {
//     //console.log("HTTP REQUEST structure", req)
//     res.json({
//         meassage: "Server Started..."
//     })
// })


module.exports = app;