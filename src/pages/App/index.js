import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../../components/Nav';
import Homepage from '../Homepage';
import TodoPage from '../Todos';
import SWPage from '../SW';
import RecipeBoxPage from '../RecipeBox';

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Nav />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/todo' component={TodoPage} />
					<Route path='/sw' component={SWPage} />
					<Route path='/recipe' component={RecipeBoxPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
