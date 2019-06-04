import React from 'react';

import './index.css';
import { useHttp } from '../../hooks/http';

const CharPicker = props => {
	// Since we want only onee http call, so we pass in an empty array
	const [isLoading, data] = useHttp('https://swapi.co/api/people', []);

	// Since our hook runs after the first render, the first value it passes is null(initialState)
	// So in order to avoid a TypeError(null) we put in a check that if the data is there,
	// then refine the data, otherwise return an empty array.
	const selectedCharacters = data
		? data.results.slice(0, 5).map((char, index) => ({
				name: char.name,
				id: index + 1
		  }))
		: [];

	let content = <p>Loading characters...</p>;

	if (!isLoading && selectedCharacters && selectedCharacters.length > 0) {
		content = (
			<select
				onChange={props.onCharSelect}
				value={props.selectedChar}
				className={props.side}
			>
				{selectedCharacters.map(char => (
					<option key={char.id} value={char.id}>
						{char.name}
					</option>
				))}
			</select>
		);
	} else if (
		!isLoading &&
		(!selectedCharacters || selectedCharacters.length === 0)
	) {
		content = <p>Could not fetch any data.</p>;
	}
	return content;
};

export default React.memo(CharPicker);
