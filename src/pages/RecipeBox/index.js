import React, { useState } from 'react';
import './index.css';

const recipesData = [
	{
		id: 1,
		name: 'Scrambled Eggs',
		ingredients: ['eggs', 'butter', 'salt', 'pepper']
	},
	{
		id: 2,
		name: 'Grilled Chicken',
		ingredients: [
			'chicken breast',
			'honey',
			'soya sauce',
			'butter',
			'salt',
			'pepper'
		]
	},
	{
		id: 3,
		name: 'Maggi',
		ingredients: [
			'maggi',
			'maggi powder',
			'green chili sauce',
			'vinegar',
			'salt',
			'pepper'
		]
	}
];

const RecipeBoxPage = () => {
	const [recipeName, setRecipeName] = useState('');
	const [recipeIngredients, setRecipeIngredients] = useState('');

	function handleRecipeNameChange({ target: { value } }) {
		setRecipeName(value);
	}

	function handleRecipeIngredientsChange({ target: { value } }) {
		setRecipeIngredients(value);
	}

	return (
		<div className='recipe-app'>
			<h1 className='recipe-app-heading'>Recipes</h1>
			<div className='recipe-container'>
				{recipesData.map(recipe => (
					<div className='recipe-list-group' key={recipe.id}>
						<header className='recipe-header'>
							<div className='recipe-name'>{recipe.name}</div>
							<button className='btn-primary'>Show Ingredients</button>
						</header>
						<ul className='ingredient-list'>
							{recipe.ingredients.map((ingredient, index) => (
								<li key={index} className='ingredient-list-item'>
									{ingredient}
								</li>
							))}
						</ul>
						<div className='cta-wrapper'>
							<button className='btn-primary cta-button'>Edit</button>
							<button className='btn-primary cta-button cta-delete'>
								Delete
							</button>
						</div>
						<form className='form-primary recipe-edit-form'>
							<h2>Edit Recipe</h2>
							<label>Name</label>
							<input
								placeholder='Edit Name'
								className='input-primary'
								type='text'
								value={recipe.name}
							/>
							<label>Ingredients</label>
							<input
								placeholder='Edit Ingredients'
								className='input-primary'
								type='text'
								value={recipe.ingredients.join(', ')}
							/>
							<button className='btn-primary recipe-form-button'>Submit</button>
						</form>
					</div>
				))}
			</div>
			<form className='form-primary new-recipe-form'>
				<h2>Add Recipe</h2>
				<label>Name</label>
				<input
					placeholder='Name'
					className='input-primary'
					type='text'
					value={recipeName}
					onChange={handleRecipeNameChange}
				/>
				<label>Ingredients</label>
				<input
					placeholder='Ingredients(separate using <comma>)'
					className='input-primary'
					type='text'
					value={recipeIngredients}
					onChange={handleRecipeIngredientsChange}
				/>
				<button className='btn-primary recipe-form-button'>Submit</button>
			</form>
		</div>
	);
};

export default RecipeBoxPage;
