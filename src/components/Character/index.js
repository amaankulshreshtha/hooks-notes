import React from 'react';

import Summary from '../Summary';
import { useHttp } from '../../hooks/http';

const Character = props => {
	const [isLoading, data] = useHttp(
		`https://swapi.co/api/people/${props.selectedChar}`,
		[props.selectedChar]
	);

	const loadedCharacter = data
		? {
				id: props.selectedChar,
				name: data.name,
				height: data.height,
				colors: {
					hair: data.hair_color,
					skin: data.skin_color
				},
				gender: data.gender,
				movieCount: data.films.length
		  }
		: null;

	let content = <p>Loading Character...</p>;

	if (!isLoading && loadedCharacter) {
		content = (
			<Summary
				name={loadedCharacter.name}
				gender={loadedCharacter.gender}
				height={loadedCharacter.height}
				hairColor={loadedCharacter.colors.hair}
				skinColor={loadedCharacter.colors.skin}
				movieCount={loadedCharacter.movieCount}
			/>
		);
	} else if (!isLoading && !loadedCharacter) {
		content = <p>Failed to fetch character.</p>;
	}
	return content;
};

// React.memo is a method exposed for functional components
// It memoizes the component and if the inputs to the function, i.e props, change, only then a render is triggered
// Reference: https://youtu.be/-MlNBTSg_Ww?t=2476
export default React.memo(Character, (prevProps, nextProps) => {
	// optional callback
	// return true if you don't want to re-render and false otherwise
});
