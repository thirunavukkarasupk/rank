import { rndBetween } from '@laufire/utils/random';

const studentManager = {
	getStudentDetails: ({ config: { rollMin, rollMax },
		state: { name, studentDetails, subjects: { tamil, english, maths }}}) =>
		[...studentDetails, {
			RollNo: rndBetween(rollMin, rollMax),
			Student: name,
			Tamil: tamil,
			English: english,
			Maths: maths,
		}],

	clearInputFields: ({ state }) =>
		({
			...state, name: '', subjects: { tamil: '', english: '', maths: '' },
		}),

};

export default studentManager;
