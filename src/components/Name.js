/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

const Name = (context) => {
	const { state: { name }, actions } = context;

	return (
		<label>StudentName<input
			value={ name }
			onChange={ (event) => actions.setName(event.target.value) }
		                  />
		</label>
	);
};

export default Name;
