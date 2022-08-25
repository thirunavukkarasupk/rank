import React from 'react';

const StudentTable = (context) => {
	const { config: { header }, state: { studentDetails }} = context;

	return (
		<table>
			<tbody>
				<tr>
					{header.map((element, index) =>
						<th key={ index }>{element}</th>)}
				</tr>
				{studentDetails.map((student) =>
					<tr key={ student.rollNo }>
						{Object.values(student).map((detail, index) =>
							<td key={ index }>{detail}</td>)}
					</tr>)}

			</tbody>
		</table>
	);
};

export default StudentTable;
