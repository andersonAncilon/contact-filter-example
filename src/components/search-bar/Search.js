import React from 'react';

import { style } from './Style';

const Search = ({ onChange, placeholder }) => {
	return (
		<div>
			<input onChange={onChange} style={style.input} type='text' placeholder={placeholder} />
		</div>
	);
};

export default Search;
