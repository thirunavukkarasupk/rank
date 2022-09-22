import React from 'react';
import { values } from '@laufire/utils/lib';
import StudentTableData from './StudentTableData';

const StudentTableRow = (context) => {
	const { data } = context;

	return data.map((student) =>
		<tr key={ student.rollNo }>
			{
				values(student).map((detail, index) =>
					<StudentTableData
						key={ index }
						{ ...{ ...context, data: detail } }
					/>)
			}
		</tr>);
};

export default StudentTableRow;
