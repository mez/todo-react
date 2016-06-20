import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should have AddTodoForm component', () => {
    expect(component.find('.add-todo-form')).to.exist;
  });

  it('should have TodoList component', () => {
  	expect(component.find('.todo-list')).to.exist;
  });

});
