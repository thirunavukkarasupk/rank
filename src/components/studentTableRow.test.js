import { rndString } from '@laufire/utils/random';
import { render } from '@testing-library/react';
import { values } from '@laufire/utils/lib';
import * as StudentTableData from './StudentTableData';
import StudentTableRow from './StudentTableRow';
import React from 'react';

test('studentTableRow', () => {
	const context = {
		data: [{ 1: rndString(), 2: rndString() },
			{ 1: rndString(), 2: rndString() }],
	};

	jest.spyOn(StudentTableData, 'default')
		.mockReturnValue(<td role="tableData"/>);

	render(StudentTableRow(context));

	context.data.map((element) =>
		values(element).map((detail) =>
			expect(StudentTableData.default)
				.toHaveBeenCalledWith({ ...context, data: detail }, {})));
});
