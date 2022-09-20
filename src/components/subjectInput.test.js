import SubjectInput from './SubjectInput';
import { render, fireEvent } from '@testing-library/react';
import { range } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

describe('subject input', () => {
	const context = {
		actions: {
			setMark: jest.fn(),
		},
		state: {
			subjects: range(1, Number('3')).map(Symbol),
		},
		data: Symbol('subject'),
	};

	test('renders the component', () => {
		const value = rndString();

		const component = render(SubjectInput(context))
			.getByRole('subjectInput');

		fireEvent.change(component, { target: { value }});
		expect(component).toBeInTheDocument();
		expect(context.actions.setMark)
			.toHaveBeenCalledWith({ [context.data]: Number(value) });
	});
});
