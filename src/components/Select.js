import React from 'react';

const Select = (context) => {
	const { actions, config: { options }, state: { filter }} = context;

	return (
		<select
			role="select"
			value={ filter }
			onChange={ (event) => {
				actions.setFilter(event.target.value);
			} }
		>
			{options.map((element, index) =>
				<option key={ index } role="option" value={ element }>
					{element}
				</option>)}

		</select>);
};

export default Select;
