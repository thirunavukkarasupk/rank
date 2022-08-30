import React from 'react';
import { values } from '@laufire/utils/lib';

const FilteredTable = (context) => {
	const { config: { header }, state: { filteredStudentDetails }} = context;

	return filteredStudentDetails.length !== 0 && <table>
		<tbody>
			<tr>
				{header.map((element, index) =>
					<th key={ index }>{element}</th>)}
			</tr>
			{filteredStudentDetails.map((student) =>
				<tr key={ student.rollNo }>
					{values(student).map((detail, index) =>
						<td key={ index }>{detail}</td>)}
				</tr>)}

		</tbody>
	</table>
	;
};

export default FilteredTable;
