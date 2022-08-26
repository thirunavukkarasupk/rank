import { React } from 'react';
import './App.scss';
import Name from './components/NameInput';
import MarksInput from './components/MarksInput';
import SaveButton from './components/SaveButton';
import StudentTable from './components/StudentTable';

const App = (context) =>
	<div className="App" role="App">
		<Name { ...context }/>
		<MarksInput { ...context }/>
		<SaveButton { ...context }/>
		<StudentTable { ...context }/>
	</div>;

export default App;
