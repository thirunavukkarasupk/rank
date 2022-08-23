import React from 'react';

const actionKeys = {
	Enter: ({ state: { name }, actions }) =>
		actions.addToStudentDetails(name),
};

const Name = (context) => {
	const { state: { name }, actions } = context;

	return (
		<input
			value={ name }
			onChange={ (event) => actions.setName(event.target.value) }
			onKeyUp={ (event) =>
				actionKeys[event.code] && actionKeys[event.code](context) }
		/>);
};

export default Name;
