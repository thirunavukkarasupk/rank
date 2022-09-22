import FilteredTable from './FilteredTable';
import React from 'react';
import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';
import * as TableHeader from './TableHeader';
import * as StudentTableRow from './StudentTableRow';
import studentManager from '../services/studentManager';
test('filtered table', () => {
	const context = {
		config: { header: [rndString(), rndString()] },
	};
	const returnedValue = Symbol('data');

	jest.spyOn(TableHeader, 'default').mockReturnValue(<th role="header"/>);
	jest.spyOn(StudentTableRow, 'default')
		.mockReturnValue(<tr role="studentTableRow"/>);
	jest.spyOn(studentManager, 'passOrFail').mockReturnValue(returnedValue);

	const component = render(FilteredTable(context)).getByRole('table');

	expect(component).toBeInTheDocument();
	context.config.header.map((element) =>
		expect(TableHeader.default)
			.toHaveBeenCalledWith({ ...context, data: element }, {}));
	expect(studentManager.passOrFail).toHaveBeenCalledWith(context);
	expect(StudentTableRow.default)
		.toHaveBeenCalledWith({ ...context, data: returnedValue }, {});
});
