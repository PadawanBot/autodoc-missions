'use strict';

const express = require('express');

const app = express();

// GET /ping -> { pong: true }
app.get('/ping', (req, res) => {
  res.status(200).json({ pong: true });
});

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

module.exports = app;
