import React, { useState } from 'react';
import './index.css';
import Todo from '../../components/Todo';
import TodoForm from '../../components/TodoForm';

const testData = [
	{
		item: 'Learn about React Hooks',
		isCompleted: false
	},
	{
		item: 'Learn about React Testing',
		isCompleted: false
	},
	{
		item: 'Learn about React Storybooks',
		isCompleted: false
	}
];

const App = () => {
	const [todos, setTodos] = useState(testData);

	function addTodo(item) {
		// setting the new todos
		const newTodos = [...todos, { item }];
		setTodos(newTodos);
	}

	function completeTodo(id) {
		const updatedTodos = todos.map((todo, index) => {
			if (id === index) return { ...todo, isCompleted: !todo.isCompleted };
			return todo;
		});
		setTodos(updatedTodos);
	}

	function removeTodo(id) {
		const updatedTodos = todos.filter((todo, index) => id !== index);
		setTodos(updatedTodos);
	}

	return (
		<div className='app'>
			<div className='todo-list'>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						isCompleted={todo.isCompleted}
						index={index}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					>
						{todo.item}
					</Todo>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
