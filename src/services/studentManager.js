import { values } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

const studentManager = {
	getStudentDetails: ({ config: { rollMin, rollMax, minMark },
		state: { name, studentDetails, subjects: { tamil, english, maths }}}) =>
		[...studentDetails, {
			student: name,
			rollNo: rndBetween(rollMin, rollMax),
			tamil: tamil,
			english: english,
			maths: maths,
			total: studentManager.calculateTotal([
				Number(tamil),
				Number(english),
				Number(maths),
			]),
			result: studentManager.getResult([
				Number(tamil),
				Number(english),
				Number(maths),
			], minMark),
		}],

	clearInputFields: ({ state }) =>
		({
			...state, name: '', subjects: { tamil: '', english: '', maths: '' },
		}),

	hasEmptyFields: ({ state: { name, subjects }}) =>
		[name, ...values(subjects)].includes(''),

	calculateTotal: (subjects) =>
		subjects.reduce((total, curr) => total + curr, 0),

	getResult: (subjects, minMark) =>
		(subjects.some((ele) => ele < minMark) ? 'FAIL' : 'PASS'),

};

export default studentManager;
