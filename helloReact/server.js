var express = require('express');

// Create the app
var app = express();
const PORT = 7654

app.use(express.static('public'));

// app.listen takes two arguments: The Port, and the function to call once the server is up.
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
