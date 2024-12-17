const app = require("./src/app")
const cors = require('cors');

require("dotenv").config();

require("./src/database/dbContext");

app.use(cors());

app.listen(3000);