import React, { Component } from 'react';
import './Task.css';

Class Task extends Component{
	redner(){
		return <p class="red">
			{this.props.task.title} -
			{this.props.task.description} -
			{this.props.task.done} -
			{this.props.task.id}
			<input type ="checkbox"/>
			<button>
			x
			</button>
		</p>
	}
}
	
export default Task;
			