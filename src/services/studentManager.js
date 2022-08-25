import { rndBetween } from '@laufire/utils/random';

const studentManager = {
	getStudentDetails: ({ config: { rollMin, rollMax },
		state: { name, studentDetails, subjects: { tamil, english, maths }}}) =>
		[...studentDetails, {
			rollNo: rndBetween(rollMin, rollMax),
			student: name,
			tamil: tamil,
			english: english,
			maths: maths,
		}],

	clearInputFields: ({ state }) =>
		({
			...state, name: '', subjects: { tamil: '', english: '', maths: '' },
		}),

	hasEmptyFields: ({ state: { name, subjects }}) =>
		[name, ...Object.values(subjects)].includes(''),

};

export default studentManager;
