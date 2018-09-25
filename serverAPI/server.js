const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));

const router = require('./router.js')

app.use(cors())

app.use(router)

app.listen(5001,() => {
  console.log('API server running at http://127.0.0.1:5001');
})