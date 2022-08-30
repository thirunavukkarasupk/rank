import { values } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

const studentManager = {
	getStudentDetails: ({ config: { rollMin, rollMax, minMark },
		state: { name, studentDetails, subjects }}) =>
		[...studentDetails, {
			student: name,
			rollNo: rndBetween(rollMin, rollMax),
			...subjects,
			total: studentManager.calculateTotal(subjects),
			result: studentManager
				.getResult(subjects, minMark),
		}],

	clearInputFields: ({ state }) =>
		({
			...state, name: '', subjects: { tamil: '', english: '', maths: '' },
		}),

	hasEmptyFields: ({ state: { name, subjects }}) =>
		[name, ...values(subjects)].includes(''),

	calculateTotal: (subjects) =>
		values(subjects).reduce((total, curr) => total + curr, 0),

	getResult: (subjects, minMark) =>
		(values(subjects).some((ele) => ele < minMark) ? 'FAIL' : 'PASS'),

	passOrFail: ({ state: { studentDetails, filter }}) =>
		studentDetails.filter((student) => student.result === filter),
};

export default studentManager;
