"use strict"

require('babel-register');

const app = require('./server/app').app,
      PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
})
