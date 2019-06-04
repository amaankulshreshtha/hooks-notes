import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
	// a check can be added to verify if the passed argument is actually a url

	const [isLoading, setIsLoading] = useState(false);
	// We want to make it as flexible as possible.
	// which is why we use the second state variable as data -> arbitrary value
	const [data, setData] = useState(null);

	// Since we can't run hooks inside of other hooks, we need to have some sort of
	// check that ensures we don't send multiple http requests.
	// Reference: https://youtu.be/-MlNBTSg_Ww?t=3033
	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to fetch.');
				}
				return response.json();
			})
			.then(fetchedData => {
				setIsLoading(false);
				setData(fetchedData);
			})
			.catch(err => {
				console.log(err);
				setIsLoading(false);
			});
	}, dependencies);
	// fetch('https://swapi.co/api/people')

	// Returning values as we need to manage other stuff in the component as well
	// We can return anything.....two elements inside an array is a coincidence
	// Not to be confused with useState
	// We can also return nothing
	return [isLoading, data];
};
