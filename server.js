const app = require("./src/app")
const cors = require('cors');

require("./src/database/dbContext");

require("dotenv").config();

app.use(cors());

app.listen(3000);