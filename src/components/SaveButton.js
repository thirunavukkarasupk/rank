import React from 'react';

const SaveButton = (context) => {
	const { actions } = context;

	return (
		<button
			onClick={ () => {
				actions.saveTheStudentDetails();
				actions.clearInputFields();
			} }
		>Save
		</button>);
};

export default SaveButton;
