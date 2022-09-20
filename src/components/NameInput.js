import React from 'react';

const Name = (context) => {
	const { state: { name }, actions } = context;

	return (
		<>
			<span>StudentName</span>
			<input
				role="nameInput"
				value={ name }
				onChange={ (event) => actions.setName(event.target.value) }
			/>
		</>
	);
};

export default Name;
