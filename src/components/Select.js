
import React from 'react';

const Select = (context) => {
	const { actions, config: { options }} = context;

	return (
		<select
			onChange={ (event) => actions.passOrFail(event.target.value) }
		>
			{options.map((element, index) =>
				<option key={ index } value={ element }>{element}</option>)}

		</select>);
};

export default Select;
