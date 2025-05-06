const express = require('express')
require('dotenv').config();
const app = express()
const PORT  = process.env.PORT || 5500 ;
const router = require('./Routes');

app.use(router);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
