import { renderComponent, expect } from '../test_helper';
import AddTodoForm from '../../src/components/add_todo_form';


describe('AddTodoForm', () => {
	let component;

	beforeEach( () => {
		//since functions are passed down. we'll define mocked functions here. 
		let props = {
			handleAddTodo: (body) => {}
		}
		component = renderComponent(AddTodoForm, props);
	});

	it('should have class .add-todo-form', () => {
		expect(component).to.have.class('add-todo-form');
	});

	it('should have an input', () => {
		expect(component.find('input')).to.exist;
	});

	it('should have a button', () => {
		expect(component.find('button')).to.exist; 
	});

	describe('Enter a todo', () => {
		beforeEach( () => {
			component.find('input').simulate('change', 'buy milk');
		});

		it('should show text that was entered', () => {
			expect(component.find('input')).to.have.value('buy milk');
		});

		it('should clear input when add button is clicked', () => {
			component.find('button').simulate('click');
			expect(component.find('input')).to.have.value('');
		});
	});
	
});