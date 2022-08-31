import studentManager from './studentManager';
import * as random from '@laufire/utils/random';
import config from '../core/config.js';

describe('studentManager', () => {
	const { getStudentDetails } = studentManager;

	test('get Student Details', () => {
		const context = {
			state: {
				name: Symbol('name'),
				subjects: {
					tamil: Symbol('tamil'),
					english: Symbol('english'),
					maths: Symbol('maths'),
				},
				studentDetails: [],
			},
			config: config,
		};
		const rollNo = Symbol('rollNo');
		const total = Symbol('total');
		const pOrF = Symbol('pOrF');

		jest.spyOn(random, 'rndBetween').mockReturnValue(rollNo);
		jest.spyOn(studentManager, 'calculateTotal').mockReturnValue(total);
		jest.spyOn(studentManager, 'getResult').mockReturnValue(pOrF);

		const result = getStudentDetails(context);

		expect(random.rndBetween)
			.toHaveBeenCalledWith(context.config.rollMin,
				context.config.rollMax);

		expect(result).toEqual([
			{
				student: context.state.name,
				rollNo: rollNo,
				tamil: context.state.subjects.tamil,
				english: context.state.subjects.english,
				maths: context.state.subjects.maths,
				total: total,
				result: pOrF,
			},
		]);
	});
});
