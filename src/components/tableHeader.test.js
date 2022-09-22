
import { rndString } from '@laufire/utils/random';
import { render } from '@testing-library/react';
import TableHeader from './TableHeader';

test('header', () => {
	const context = {
		data: rndString(),
	};

	const component = render(TableHeader(context))
		.getByRole('tableHeader');

	expect(component).toBeInTheDocument();
	expect(component).toHaveTextContent(context.data);
});
