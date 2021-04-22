
const router = require('./router.js');
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(
    cors({
        origin: '*'
    })
);

router.set(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});