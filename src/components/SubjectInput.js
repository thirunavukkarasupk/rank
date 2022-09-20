import React from 'react';

const SubjectInput = (context) => {
	const { actions, state: { subjects }, data: subject } = context;

	return (
		<label>
			{subject}
			<input
				role="subjectInput"
				value={ subjects[subject] }
				onChange={ (event) =>
					actions.setMark({ [subject]: Number(event.target.value) }) }
			/>
		</label>
	);
};

export default SubjectInput;
