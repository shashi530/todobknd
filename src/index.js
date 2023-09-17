const express = require("express");
const connect = require('./db')

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const todoController = require('./controllers/todo.controller')
app.use('/add', todoController)

app.listen(2345, async () => {
    try {
      await connect();
      console.log(`listening on port 2345`);
    } catch (error) {
      console.log(error.message);
    }
  });