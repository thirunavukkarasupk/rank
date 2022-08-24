import React from 'react';

const ClearInputFields = (context) => {
	const { actions } = context;

	return (
		<button
			onClick={ () => actions.clearInputFields(context) }
		>ClearInputFields
		</button>
	);
};

export default ClearInputFields;
