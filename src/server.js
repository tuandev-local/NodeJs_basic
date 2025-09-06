const express = require('express');
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express();   //app express
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//config template engine //config static file
configViewEngine(app);




//khai bao route
app.use(webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})