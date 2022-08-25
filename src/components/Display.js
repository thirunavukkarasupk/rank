import React from 'react';
import StudentTable from './StudentTable';

const Display = (context) => {
	const { state: { studentDetails }} = context;

	return (
		studentDetails.map((student) => <div key={ student.RollNo }>
			<table>
				<thead>
					<th>Student</th>
					<th>RollNo</th>
					<th>Tamil</th>
					<th>English</th>
					<th>Maths</th>
				</thead>
			</table>
			<StudentTable { ...{ ...context, data: student } }/>
		</div>)

	);
};

export default Display;
