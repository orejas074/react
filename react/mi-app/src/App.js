import React, { Component } from 'react';
import './assets/css/App.css';
import './lol.css';
import tasks from './sample/tasks.json';
import Tasks from './component/tasks.js';

console.log(tasks);
class App extends Component{

state={
	tasks:tasks
}
	
	render(){
	return <div>
		<Tasks tasks={this.state.tasks}/>
	</div>
	}
}
				
export default App;
