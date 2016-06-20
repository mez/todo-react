import { renderComponent, expect } from '../test_helper';
import TodoListItem from '../../src/components/todo_list_item';

describe('TodoListItem', () => {
	let component;

	beforeEach( () => { 
		let props = { 
			todo:{id: 1, body: 'buy milk', completed: false}, 
			handleDeleteTodo: (todo) => {}, 
			handleDoneTodo: (todo) => {}
		}
		component = renderComponent(TodoListItem, props, null, true);
	});

	it('should be a <li> element', () => {
		expect(component.find('li')).to.exist; 
	});

	it('should have a done button ', () => {
		expect(component.find('button')).to.contain('done');
	});

	it('should have a delete button', () => {
		expect(component.find('button')).to.contain('delete');
	});

});