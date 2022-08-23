const setName = ({ data }) =>
	({
		name: data,
	});

const addToStudentDetails = ({ state: { studentDetails }, data }) =>
	({
		studentDetails: [...studentDetails, data],
		name: '',
	});

const actions = {
	setName,
	addToStudentDetails,
};

export default actions;
