require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(router);
 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});