const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const Todo = require('../models/todo.model')

router.post('', async (req,res) => {
    try{
        console.log(req.body)
        const todo = await Todo.create(req.body);
        return res.status(201).send(todo);
    }
    catch(error){
        return res.status(500).send(todo);
    }
})

router.get('', async (req,res) => {
    try{
        const todo = await Todo.find().lean().exec();
        return res.send(todo);
    }
    catch(eroor){
        return res.status(500).send(todo);
    }
})

module.exports = router;