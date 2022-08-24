import { React } from 'react';
import './App.scss';
import Name from './components/Name';
import MarksInput from './components/MarksInput';

const App = (context) =>

	<div className="App" role="App">
		<Name { ...context }/>
		<MarksInput { ...context }/>
	</div>;

export default App;
