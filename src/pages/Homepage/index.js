import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Homepage = () => (
	<div className='homepage'>
		<ul className='list'>
			<Link className='list-item' to='/todo'>
				<li>Todo App</li>
			</Link>
			<Link className='list-item' to='/sw'>
				<li>SW App</li>
			</Link>
			<Link className='list-item' to='/recipe'>
				<li>Recipe Box App</li>
			</Link>
		</ul>
	</div>
);

export default Homepage;
