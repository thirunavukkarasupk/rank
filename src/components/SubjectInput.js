import React from 'react';

const SubjectInput = (context) => {
	const { actions, state: { subjects }, data: subject } = context;

	return (
		<label>
			{subject}
			<input
				value={ subjects[subject] }
				onChange={ (event) =>
					actions.setMark({ subjectName: subject,
						mark: event.target.value }) }
			/>
		</label>
	);
};

export default SubjectInput;
