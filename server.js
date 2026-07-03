const express = require('express');
const app = express();
//const PORT = 3000;
const PORT = process.env.PORT || 3000;

//web server:
app.use(express.static("frontend"));

app.listen(PORT, function() {
    console.log("successfully running at http://localhost:" + PORT);
});
