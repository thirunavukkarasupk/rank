import React from 'react';

const SaveButton = (context) => {
	const { actions } = context;

	return (
		<button
			onClick={ () => actions.saveTheStudentDetails(context) }
		>Save
		</button>);
};

export default SaveButton;
