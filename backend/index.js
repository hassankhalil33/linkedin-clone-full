const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db.config')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const authRoutes = require('./routes/auth.routes');
app.use('/', authRoutes)

app.listen(process.env.PORT, (err)=>{
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
})
