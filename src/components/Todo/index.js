import React from 'react';
import './index.css';

const Todo = ({ removeTodo, completeTodo, index, children, isCompleted }) => {
	function handleOnComplete() {
		completeTodo(index);
	}

	function handleOnRemove() {
		removeTodo(index);
	}

	return (
		<div
			className='todo'
			style={{ textDecoration: isCompleted ? 'line-through' : '' }}
		>
			{children}
			<div className='cta-wrapper'>
				<button onClick={handleOnComplete}>Completed</button>
				<button onClick={handleOnRemove}>Remove</button>
			</div>
		</div>
	);
};

export default Todo;
