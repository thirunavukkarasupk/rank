import React from 'react';
import StudentTable from './StudentTable';

const Display = (context) => {
	const { state: { studentDetails }} = context;

	return (
		studentDetails.map((student) => <div key={ student.RollNo }>
			<StudentTable { ...{ ...context, data: student } }/>
		</div>)

	);
};

export default Display;
