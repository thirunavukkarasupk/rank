import React from 'react';

const StudentTable = (context) => {
	const { data:
		{ student, rollNo, tamil, english, maths }} = context;

	return (
		<table>
			<tbody>
				<tr>
					<td>{student}</td>
					<td>{rollNo}</td>
					<td>{tamil}</td>
					<td>{english}</td>
					<td>{maths}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default StudentTable;
