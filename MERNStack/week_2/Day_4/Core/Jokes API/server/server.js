const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );




// grab the config
require("./config/mongoose.config");
// grab the routes
require("./routes/joke.routes")(app);




app.listen( port, () => console.log(`Listening on port 👍👍 : ${port}`) );