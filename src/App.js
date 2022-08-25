import { React } from 'react';
import './App.scss';
import Name from './components/Name';
import MarksInput from './components/MarksInput';
import SaveButton from './components/SaveButton';

const App = (context) =>
	<div className="App" role="App">
		<Name { ...context }/>
		<MarksInput { ...context }/>
		<SaveButton { ...context }/>
	</div>;

export default App;
