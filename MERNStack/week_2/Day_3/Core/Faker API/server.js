const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/routes")(app);
require("./routes/company_routes")(app);
require("./routes/user_company")(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );
