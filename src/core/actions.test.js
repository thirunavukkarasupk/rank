import { range } from '@laufire/utils/collection';
import actions from './actions';
import studentManager from '../services/studentManager';

describe('actions', () => {
	const {
		setName,
		setMark,
		saveTheStudentDetails,
		clearInputFields,
		setFilter,
	} = actions;

	test('setName', () => {
		const data = Symbol('data');

		const result = setName({ data });

		expect(result).toEqual({ name: data });
	});

	test('setMark', () => {
		const context = {
			state: {
				subjects: range(1, Number('2')).map(Symbol),
			},
			data: Symbol('data'),
		};

		const result = setMark(context);

		expect(result).toEqual({ subjects:
			{ ...context.state.subjects, ...context.data }});
	});

	test('save the student details', () => {
		const context = Symbol('context');
		const expected = Symbol('expected');

		jest.spyOn(studentManager, 'getStudentDetails')
			.mockReturnValue(expected);

		const result = saveTheStudentDetails(context);

		expect(studentManager.getStudentDetails).toHaveBeenCalledWith(context);
		expect(result).toEqual({ studentDetails: expected });
	});

	test('clear input fields', () => {
		const context = Symbol('context');

		jest.spyOn(studentManager, 'clearInputFields')
			.mockReturnValue();

		clearInputFields(context);

		expect(studentManager.clearInputFields).toHaveBeenCalledWith(context);
	});

	test('set filter', () => {
		const data = Symbol('data');

		const result = setFilter({ data });

		expect(result).toEqual({ filter: data });
	});
});
