const express = require('express');
const app = express();
const port = 4040;

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => console.log('Listening on ' + port));
