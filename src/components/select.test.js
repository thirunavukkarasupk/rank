import Select from './Select';
import { render, fireEvent } from '@testing-library/react';

test('select', () => {
	const options = ['PASS', 'FAIL'];
	const context = {
		actions: { setFilter: jest.fn() },
		config: { options },
		state: { filter: options[1] },
	};
	const component = render(Select(context)).getByRole('select');

	fireEvent.change(component, { target: { value: options[1] }});

	expect(component).toBeInTheDocument();
	expect(context.actions.setFilter)
		.toHaveBeenCalledWith(context.state.filter);
});
