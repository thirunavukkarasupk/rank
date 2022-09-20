import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import context from './core/context';
import * as Name from './components/NameInput';
import * as MarksInput from './components/MarksInput';
import * as SaveButton from './components/SaveButton';
import * as StudentTable from './components/StudentTable';
import * as Select from './components/Select';
import * as FilteredTable from './components/FilteredTable';

describe('App', () => {
	test('renders the component appropriately', () => {
		jest.spyOn(Name, 'default').mockReturnValue(<div role="name"/>);
		jest.spyOn(MarksInput, 'default')
			.mockReturnValue(<div role="marksInput"/>);
		jest.spyOn(SaveButton, 'default')
			.mockReturnValue(<div role="saveButton"/>);
		jest.spyOn(StudentTable, 'default')
			.mockReturnValue(<div role="studentTable"/>);
		jest.spyOn(Select, 'default')
			.mockReturnValue(<div role="select"/>);
		jest.spyOn(FilteredTable, 'default')
			.mockReturnValue(<div role="filteredTable"/>);

		const { getByRole } = render(App(context));

		expect(getByRole('App')).toBeInTheDocument();

		expect(getByRole('name')).toBeInTheDocument();
		expect(Name.default).toHaveBeenCalledWith(context, {});

		expect(getByRole('marksInput')).toBeInTheDocument();
		expect(MarksInput.default).toHaveBeenCalledWith(context, {});

		expect(getByRole('saveButton')).toBeInTheDocument();
		expect(SaveButton.default).toHaveBeenCalledWith(context, {});

		expect(getByRole('studentTable')).toBeInTheDocument();
		expect(StudentTable.default).toHaveBeenCalledWith(context, {});

		expect(getByRole('select')).toBeInTheDocument();
		expect(Select.default).toHaveBeenCalledWith(context, {});

		expect(getByRole('filteredTable')).toBeInTheDocument();
		expect(FilteredTable.default).toHaveBeenCalledWith(context, {});
	});
});
