import React from 'react';

const StudentTable = (context) => {
	const { data:
		{ Student, RollNo, Tamil, English, Maths }} = context;

	return (
		<table>
			<tbody>
				<tr>
					<td>{Student}</td>
					<td>{RollNo}</td>
					<td>{Tamil}</td>
					<td>{English}</td>
					<td>{Maths}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default StudentTable;
