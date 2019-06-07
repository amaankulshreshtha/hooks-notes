import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Nav = () => (
	<nav className='navbar'>
		<h3 className='nav-heading'>Hook Apps</h3>
		<ul className='nav'>
			<Link className='nav-item' to='/todo'>
				<li>Todo App</li>
			</Link>
			<Link className='nav-item' to='/sw'>
				<li>SW App</li>
			</Link>
			<Link className='nav-item' to='/'>
				<li>More...</li>
			</Link>
		</ul>
	</nav>
);

export default Nav;
