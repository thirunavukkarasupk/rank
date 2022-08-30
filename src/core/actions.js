import studentManager from '../services/studentManager';

const setName = ({ data }) =>
	({
		name: data,
	});

const setMark = ({ state: { subjects }, data }) =>
	({
		subjects: { ...subjects, ...data },
	});

const saveTheStudentDetails = (context) =>
	({
		studentDetails: studentManager.getStudentDetails(context),
	});

const clearInputFields = (context) =>
	studentManager.clearInputFields(context);

const passOrFail = (context) =>
	({
		filteredStudentDetails: studentManager.passOrFail(context),
	});

const actions = {
	setName,
	setMark,
	saveTheStudentDetails,
	clearInputFields,
	passOrFail,
};

export default actions;
