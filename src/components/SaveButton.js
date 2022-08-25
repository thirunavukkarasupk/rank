/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import studentManager from '../services/studentManager';

const SaveButton = (context) => {
	const { actions } = context;

	return !studentManager.hasEmptyFields(context)
	&& <button
		onClick={ () => {
			actions.saveTheStudentDetails();
			actions.clearInputFields();
		} }
	   >Save
	</button>

	;
};

export default SaveButton;
