const express = require('express');
const path = require('path');

const app = express();

app.set('PORT', process.env.PORT || 5000);

app.disable('x-powered-by');

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });
}

module.exports = app;
