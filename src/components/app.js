import React, {Component} from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';

import AddTodoForm from './add_todo_form';
import TodoList from './todo_list';
import _ from 'lodash';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {todos: [{id:1, body:'Buy Milk.', completed:false}]}
	};

	handleAddTodo(todo) {
		let {todos} = this.state;
		let newTodos = [
			...todos,
			{
				id:todos.length + 1,
				body:todo,
				completed: false
			}
		]
		this.setState({todos:newTodos});
	}

	handleDeleteTodo(todo) {
		let {todos} = this.state;
		let newTodos = _.filter(todos, (t)=> { return t.id != todo.id });
		this.setState({todos:newTodos});
	}

	render() {
		return (
			<div>
	      <Appbar>
	      	<div className="mui--text-title mui--text-center">TODO APP</div>
	      </Appbar>
	      <AddTodoForm
	      	handleAddTodo={(todo) => this.handleAddTodo(todo)}
	      />
	      <TodoList 
	      	handleDeleteTodo={(todo) => this.handleDeleteTodo(todo)}
	      	todos={this.state.todos} />
	    </div>
		);
	};
};
