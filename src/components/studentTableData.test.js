import StudentTableData from './StudentTableData';
import { render } from '@testing-library/react';
import { rndString } from '@laufire/utils/random';

test('studentTableData', () => {
	const context = { data: rndString() };

	const component = render(StudentTableData(context))
		.getByRole('studentTableData');

	expect(component).toBeInTheDocument();
	expect(component).toHaveTextContent(context.data);
});
