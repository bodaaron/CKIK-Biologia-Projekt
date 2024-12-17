const app = require("./src/app")

require("dotenv").config();

require("./api/database/dbContext");

app.listen(3000);