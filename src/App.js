import { React } from 'react';
import './App.scss';
import Name from './components/NameInput';
import MarksInput from './components/MarksInput';
import SaveButton from './components/SaveButton';
import StudentTable from './components/StudentTable';
import Select from './components/Select';

const App = (context) =>
	<div className="App" role="App">
		<Name { ...context }/>
		<MarksInput { ...context }/>
		<SaveButton { ...context }/>
		<StudentTable { ...context }/>
		<Select { ...context }/>
	</div>;

export default App;
