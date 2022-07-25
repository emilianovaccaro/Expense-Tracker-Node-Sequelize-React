const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { sequelize } = require('./db/database');

//routes
const { transactionRoutes } = require('./routes/transactionRoutes');
const { userRoutes } = require('./routes/userRoutes');



//app and port
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/user", userRoutes);
app.use("/api/transaction", transactionRoutes);



//server start
const PORT = process.env.PORT || 8080;
const main = async ( ) => {
  try {
    await sequelize.sync();
    app.listen(PORT);
    console.log(`Connection has been established successfully, port: ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main();