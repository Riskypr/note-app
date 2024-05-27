const express = require('express');
const app = express();
const path = require('path');

// Mengonfigurasi Express untuk menangani file CSS dengan tipe MIME text/css
app.use(express.static(path.join(__dirname)));

// Mengonfigurasi Express untuk menangani file CSS dengan tipe MIME text/css
app.get('*.css', function(req, res, next) {
  res.header('Content-Type', 'text/css');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
