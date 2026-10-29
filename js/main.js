"use strict";
// {
//     id: 1,
//     text: "todo",
//     is_completed: false
// }
const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};
const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;
const todos = [];
let id = 1;
const getNewTodoId = (todos) => {
	return (
		todos.reduce((maxId, todo) => {
			return Math.max(maxId, todo[todoKeys.id]);
		}, 0) + 1
	);
};
const createTodo = (todos, task) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: task,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	id++;
	return newTodo;
};

const completeTodoId = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};
const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};
