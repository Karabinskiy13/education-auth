/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const authRouter = require('./authRouter');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const dataBase =
  'mongodb+srv://ivan:karabin13@cluster0.gawvhz2.mongodb.net/auth?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

const start = async () => {
  try {
    await mongoose.connect(dataBase);
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
