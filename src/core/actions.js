import studentManager from '../services/studentManager';

const setName = ({ data }) =>
	({
		name: data,
	});

const setMark = ({ state: { subjects }, data: { subjectName, mark }}) =>
	({
		subjects: { ...subjects, [subjectName]: mark },
	});

const saveTheStudentDetails = (context) =>
	({
		studentDetails: studentManager.getStudentDetails(context),
	});

const actions = {
	setName,
	setMark,
	saveTheStudentDetails,
};

export default actions;
