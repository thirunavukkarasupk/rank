import React from 'react';
import TableHeader from './TableHeader';
import StudentTableRow from './StudentTableRow';

const StudentTable = (context) => {
	const { config: { header }, state: { studentDetails }} = context;

	return (
		<table role="table">
			<tbody>
				<tr>
					{header.map((element, index) =>
						<TableHeader
							key={ index }
							{ ...{ ...context, data: element } }
						/>)}
				</tr>
				<StudentTableRow { ...{ ...context, data: studentDetails } }/>
			</tbody>
		</table>);
};

export default StudentTable;
