import MarksInput from './MarksInput';
import React from 'react';
import { render } from '@testing-library/react';
import { range } from '@laufire/utils/collection';
import * as SubjectInput from './SubjectInput';
import { rndString } from '@laufire/utils/random';

describe('marksInput', () => {
	const context = {
		config: { subjects: range(1, Number('3')).map(() => rndString()) },
	};

	test('displays the component', () => {
		jest.spyOn(SubjectInput, 'default')
			.mockReturnValue(<div role="subjectInput"/>);
		const { getAllByRole } = render(MarksInput(context));

		context.config.subjects.map((subject, index) => {
			expect(getAllByRole('subjectInput')[index]).toBeInTheDocument();
			expect(SubjectInput.default)
				.toHaveBeenCalledWith({ ...context, data: subject }, {});
		});
	});
});
