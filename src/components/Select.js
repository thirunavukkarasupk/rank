import React from 'react';

const Select = ({ config: { options }}) =>
	<select>
		{options.map((element, index) =>
			<option key={ index } value={ element }>{element}</option>)}

	</select>;

export default Select;
