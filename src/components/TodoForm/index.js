import React, { useState } from 'react';
import './index.css';

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (!value) return;
		// Using method passed as prop
		addTodo(value);
		// Resetting the value
		setValue('');
	}

	function handleChange({ target: { value } }) {
		setValue(value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='input'
				value={value}
				onChange={handleChange}
				placeholder='Add new todo...'
			/>
		</form>
	);
};

export default TodoForm;
