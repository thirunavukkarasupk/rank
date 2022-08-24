const setName = ({ data }) =>
	({
		name: data,
	});

const setMark = ({ state: { subjects }, data: { subjectName, mark }}) =>
	({
		subjects: { ...subjects, [subjectName]: mark },
	});

const actions = {
	setName,
	setMark,
};

export default actions;
