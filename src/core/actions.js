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

const clearInputFields = (context) =>
	studentManager.clearInputFields(context);

const actions = {
	setName,
	setMark,
	saveTheStudentDetails,
	clearInputFields,
};

export default actions;
