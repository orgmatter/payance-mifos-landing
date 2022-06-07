const express = require('express');
const app = express();
const PORT = 3003 || process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { requestDemoRouter, getQuoteRouter } = require('./send-email-router');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/api/request-demo', requestDemoRouter);
app.use('/api/get-quotes', getQuoteRouter);


app.listen(PORT, () => {
    console.log('Server is running at: ', PORT);
})