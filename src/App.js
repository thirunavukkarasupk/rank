import { React } from 'react';
import './App.scss';
import Name from './components/Name';

const App = (context) =>

	<div className="App" role="App">
		<Name { ...context }/>
	</div>;

export default App;
