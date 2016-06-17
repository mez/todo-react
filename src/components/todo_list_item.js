import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const TodoListItem = ({todo, handleDeleteTodo, handleDoneTodo}) => {
	let body = todo.body;
	if (todo.completed) {
		body = <strike> {todo.body} </strike>;
	}

	return (
		<li className="mui--text-display1"> 
			<Panel>
				<Row>
					<Col md='8' xs='8'>
						{body}
					</Col>
					<Col md='4' xs='4'>
						<Button 
							onClick={(e) => handleDoneTodo(todo)}
							size='small' 
							variant="flat" 
							color="primary">done</Button>
						<Button 
							onClick={(e) => handleDeleteTodo(todo)}
							size='small' 
							variant="flat" 
							color="danger">delete</Button>
					</Col>
				</Row>
			</Panel>
		</li>
	);
};

export default TodoListItem;