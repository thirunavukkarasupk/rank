import config from './config';

const seed = {
	name: '',
	subjects: config.subjects.reduce((acc, curr) =>
		({ ...acc, [curr]: '' }), {}),
	studentDetails: [{
		student: 'Idha',
		rollNo: 2345,
		tamil: 45,
		english: 14,
		maths: 65,
		total: 165,
		result: 'FAIL',
	}, {
		student: 'Nannan',
		rollNo: 3245,
		tamil: 65,
		english: 75,
		maths: 80,
		total: 220,
		result: 'PASS',
	}],
	filter: config.options[0],
};

export default seed;
