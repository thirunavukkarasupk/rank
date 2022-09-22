import React from 'react';
import TableHeader from './TableHeader';
import StudentTableRow from './StudentTableRow';
import studentManager from '../services/studentManager';

const FilteredTable = (context) => {
	const { config: { header }} = context;

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
				<StudentTableRow { ...{ ...context,
					data: studentManager.passOrFail(context) } }
				/>
			</tbody>
		</table>);
};

export default FilteredTable;
