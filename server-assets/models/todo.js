let routes = require('express').Router();

let todos = [];

function addTodo(todo) {
    todos.push(todo);
}

function removeTodo(index) {
    todos.splice(index, 1);
}

function updatedTodo(index, newTodo) {
    if (index < todos.length) {
        todos[index] = newTodo;
        return { message: 'Successfully edited todo' };
    }
    return { error: 'Out of bounds; try again' }
}

routes.route('/todos/:index?')
    .get(function (request, response) {
        response.send(todos);
    })
    .post(function (request, response) {
        addTodo(request.body.todo); // must install body-parser to use this method
        response.send({ message: "Successfully added a todo" })
    })
    .put(function (request, response) {
        res.send(
            editTodo(request.params.index, request.body.todo)
        )
    })
    .delete(function (request, response) {
        removeTodo(request.params.index);
        response.send({ message: "Successfully removed a todo" })
    })


module.exports = {
    routes
}