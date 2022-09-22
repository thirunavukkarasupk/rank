import StudentTable from './StudentTable';
import * as TableHeader from './TableHeader';
import * as StudentTableRow from './StudentTableRow';
import React from 'react';
import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';

test.only('StudentTable', () => {
	const context = {
		config: { header: [rndString(), rndString()] },
		state: { studentDetails: Symbol('studentDetails') },
	};

	jest.spyOn(TableHeader, 'default').mockReturnValue(<th role="header"/>);
	jest.spyOn(StudentTableRow, 'default')
		.mockReturnValue(<tr role="studentData"/>);

	const component = render(StudentTable(context)).getByRole('table');

	expect(component).toBeInTheDocument();
	context.config.header.map((element) =>
		expect(TableHeader.default)
			.toHaveBeenCalledWith({ ...context, data: element }, {}));
	expect(StudentTableRow.default).toHaveBeenCalledWith({ ...context,
		data: context.state.studentDetails }, {});
});
