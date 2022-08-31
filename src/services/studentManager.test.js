import studentManager from './studentManager';
import * as random from '@laufire/utils/random';
import config from '../core/config.js';
import seed from '../core/seed.js';

describe('studentManager', () => {
	const {
		getStudentDetails,
		clearInputFields,
		hasEmptyFields,
		calculateTotal,
		getResult,
		passOrFail,
	} = studentManager;

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

	test('clear input fields', () => {
		const context = {
			seed,
		};
		const result = clearInputFields(context);

		expect(result).toEqual({
			name: '',
			subjects: context.seed.subjects,
		});
	});

	describe('has empty fields', () => {
		test('returns false when the values are not empty ', () => {
			const context = {
				state: {
					name: Symbol('name'),
					subjects: { tamil: Symbol('tamil') },
				},
			};

			const result = hasEmptyFields(context);

			expect(result).toEqual(false);
		});

		test('returns true when the one or more values are  empty ', () => {
			const context = {
				state: {
					name: '',
					subjects: { tamil: Symbol('tamil') },
				},
			};

			const result = hasEmptyFields(context);

			expect(result).toEqual(true);
		});
	});

	test('calculate the total', () => {
		const subjects = { tamil: 1, english: 2, maths: 3 };

		const result = calculateTotal(subjects);

		expect(result)
			.toEqual(subjects.tamil + subjects.english + subjects.maths);
	});

	describe('getTheResultOfTheStudent', () => {
		const minMark = 35;

		test('Mark Is Less Than 35 In One Or More Subjects', () => {
			const subjects = { tamil: 5, english: 100, maths: 50 };

			const result = getResult(subjects, minMark);

			expect(result).toEqual('FAIL');
		});

		test('all The Subject Marks Are Above 35', () => {
			const subjects = { tamil: 35, english: 100, maths: 50 };

			const result = getResult(subjects, minMark);

			expect(result).toEqual('PASS');
		});
	});

	describe('filter based on pass or fail', () => {
		const failData = {
			student: 'Idha',
			rollNo: 2345,
			tamil: 45,
			english: 14,
			maths: 65,
			total: 165,
			result: 'FAIL',
		};
		const passData = {
			student: 'Nannan',
			rollNo: 3245,
			tamil: 65,
			english: 75,
			maths: 80,
			total: 220,
			result: 'PASS',
		};
		const studentDetails = [passData, failData];

		test('filter based on pass', () => {
			const state = {
				studentDetails: studentDetails,
				filter: 'PASS',
			};

			const result = passOrFail({ state });

			expect(result).toEqual([passData]);
		});

		test('filter based on fail', () => {
			const state = {
				studentDetails: studentDetails,
				filter: 'FAIL',
			};

			const result = passOrFail({ state });

			expect(result).toEqual([failData]);
		});
	});
});
