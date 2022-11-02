const express = require('express')
const cors = require('cors')
const port = 3000


var bodyParser = require('body-parser')
let todos = [];
var app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/todos', (req, res) => {
  res.json(todos);
})
app.post('/todos', (req, res)=>{
    const text = req.body.text;
    const completed = req.body.completed;
    console.log(text, completed);
    if(text && (completed || completed === false)){
        todos.push({id: todos.length+1, text, completed});

    }else{
        return res.json({error: 'bad params', params: {text, completed}})
    }
})
app.delete('/todos/:id',(req, res)=>{
    const id = req.params['id'];
    const todo = todos.find(item => item.id ==id);
    todos = todos.filter(item => item.id != id)
    return res.json(todo);
})
app.put('/todos/:id', (req, res) =>{
    const id = req.params['id'];
    const text = req.body.text;
    const completed = req.body.completed;
    if(text && (completed || completed === false)){
        const todo = todos.find(item => item.id ==id);
        todo.text = text;
        todo.completed = completed;
        return res.json(todo);

    }else{
        return res.json({error: 'bad params', params: {text, completed}})
    }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})