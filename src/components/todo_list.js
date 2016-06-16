import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import TodoListItem from './todo_list_item';

const TodoList = ({todos}) => {
	const todoItems = todos.map((todo) => {
		return (
			<TodoListItem 
				key={todo.id}
				todo={todo}
			/>
		);
	});

	return (
		<Row>
			<Col md='4' md-offset="4">
				<ul className="todo-list">
    			{todoItems}
    		</ul>
    	</Col>
    </Row>
	);
};

export default TodoList;
