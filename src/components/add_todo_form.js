import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default class AddTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {body:''}
	};

  handleAddClick() {
    this.props.handleAddTodo(this.state.body);
    this.setState({body:''});
  }

	render() {
		return (
			<div className="add-todo-form">
				<Row>
					<Col md='4' xs='8' md-offset="4">
						<div className="add-input-wrapper">
        			<Input
        				onChange={event => this.setState({body:event.target.value})}
                value={this.state.body} 
        				autoFocus={true} 
        				label="What do you have todo?" 
        				floatingLabel={true} />
        		</div>
        	</Col>
        	<Col md='2' xs='2'>
        		<Button 
        			onClick={(event) => this.handleAddClick() }
        			disabled={this.state.body.length == 0}
        			size="large" 
        			color='accent'>
        				Add
        		</Button>
        	</Col>
        </Row>
			</div>
		);
	};
}
