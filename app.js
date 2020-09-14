const express = require('express');
const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

app.use(express.static('public'));


app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);
});
