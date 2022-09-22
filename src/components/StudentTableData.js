import React from 'react';

const StudentTableData = (context) => {
	const { data } = context;

	return (
		<td role="studentTableData">{data}</td>
	);
};

export default StudentTableData;
