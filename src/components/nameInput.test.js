import { rndString } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';
import NameInput from './NameInput';

describe('nameInput', () => {
	const context = {
		state: { name: Symbol('name') },
		actions: { setName: jest.fn() },

	};

	test('displays the component', () => {
		const component = render(NameInput(context)).getByRole('nameInput');

		expect(component).toBeInTheDocument();
	});

	test('on changing the value', () => {
		const value = rndString();
		const component = render(NameInput(context)).getByRole('nameInput');

		fireEvent.change(component, { target: { value }});
		expect(context.actions.setName).toHaveBeenCalledWith(value);
	});
});
