require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port =3000;
app.use(express.json());
app.use('/users',require('./api/user.api'));
app.use('/messages',require('./api/message.api'));
mongoose.connect("mongodb+srv://tariq:Tariq55@cluster0.wbontdq.mongodb.net/saraha");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));