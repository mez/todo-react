import { renderComponent, expect } from '../test_helper';
import TodoList from '../../src/components/todo_list';

describe('TodoList', () => {
	let component;

	beforeEach( () => {
		let props = {
			todos: [{id: 1, body: 'buy milk', completed: false}, 
							{id: 2, body: 'buy cookies', completed: false}],
			handleDeleteTodo: todo => {},
			handleDoneTodo: todo => {}
		}

		component = renderComponent(TodoList, props, null, true);
	});

	it('should have .todo-list class for the <ul> element', () => {
		expect(component.find('ul')).to.have.class('todo-list');
	});

	it('should have a <ul> element', () => {
		expect(component.find('ul')).to.exist;
	});

	it('should have a <li> for each todo', () => {
		expect(component.find('li').length).to.equal(2);
	});

	it('should list each todo that is provided', () => {
		expect(component).to.contain('buy milk');
		expect(component).to.contain('buy cookies');
	});

});