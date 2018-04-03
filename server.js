const express = require('express');
const path = require('path');

// Require .env variables
require('dotenv').config({ path: 'variables.env' });

// Create express app
const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve public files
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
