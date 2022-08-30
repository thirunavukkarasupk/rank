import React from 'react';
import { values } from '@laufire/utils/lib';
import studentManager from '../services/studentManager';

const FilteredTable = (context) => {
	const { config: { header }} = context;

	return <table>
		<tbody>
			<tr>
				{header.map((element, index) =>
					<th key={ index }>{element}</th>)}
			</tr>
			{studentManager.passOrFail(context)
				.map((student) =>
					<tr key={ student.rollNo }>
						{values(student).map((detail, index) =>
							<td key={ index }>{detail}</td>)}
					</tr>)}

		</tbody>
	</table>
	;
};

export default FilteredTable;
