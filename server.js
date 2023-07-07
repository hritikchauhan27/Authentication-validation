const express = require('express');
let dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT;

//const authMiddleware = require('./middleware/authMiddleware');
app.use(express.json());
// app.use(authMiddleware);

const authRoutes = require('./routes/userRoutes');
const genToken = require("./routes/generateToken")
app.use(authRoutes);
app.use(genToken)


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
