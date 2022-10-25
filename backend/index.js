const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');
const companyRoutes = require('./routes/company.routes');
require('dotenv').config();
require('./config/db.config')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', authRoutes);
app.use('/user', usersRoutes);
app.use('/company', companyRoutes);

app.listen(process.env.PORT, (err)=>{
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
})
