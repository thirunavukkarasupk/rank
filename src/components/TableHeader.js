import React from 'react';

const TableHeader = (context) => {
	const { data } = context;

	return (
		<th role="tableHeader">
			{data}
		</th>);
};

export default TableHeader;
