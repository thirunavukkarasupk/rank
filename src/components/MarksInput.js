import React from 'react';
import SubjectInput from './SubjectInput';

const MarksInput = (context) => {
	const { config: { subjects }} = context;

	return (
		subjects.map((subject) =>
			<SubjectInput
				key={ subject }
				{ ...{ ...context, data: subject } }
			/>)
	);
};

export default MarksInput;
