const express = require('express');
const app = express();


app.use(express.static('./views'))

app.use('/web/semantic',express.static('./semantic'))
app.use('/web/node_modules',express.static('./node_modules'))

app.listen(3001, () => {
  console.log('server running at http://127.0.0.1:3001');
})