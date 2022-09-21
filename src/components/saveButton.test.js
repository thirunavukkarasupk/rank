import SaveButton from './SaveButton';
import studentManager from '../services/studentManager';
import { render, fireEvent } from '@testing-library/react';

describe('saveButton', () => {
	const context = {
		actions: {
			saveTheStudentDetails: jest.fn(),
			clearInputFields: jest.fn(),
		},
	};

	test('fields are Empty,does not render the component ', () => {
		jest.spyOn(studentManager, 'hasEmptyFields').mockReturnValue(true);

		render(SaveButton(context));

		expect(studentManager.hasEmptyFields).toHaveBeenCalledWith(context);
	});

	test('has no empty fields', () => {
		jest.spyOn(studentManager, 'hasEmptyFields').mockReturnValue(false);

		const component = render(SaveButton(context)).getByRole('saveButton');

		fireEvent.click(component);

		expect(component).toBeInTheDocument();
		expect(studentManager.hasEmptyFields).toHaveBeenCalledWith(context);
		expect(context.actions.saveTheStudentDetails).toHaveBeenCalledWith();
		expect(context.actions.clearInputFields).toHaveBeenCalledWith();
	});
});
