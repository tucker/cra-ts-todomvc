import React from 'react'
import TodoList from './TodoList';
import { useAppState } from './store';

const TodoMain = () => {

  const todos = useAppState(state => state.todos);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList todos={todos}></TodoList>
    </section>
  )
}

export default TodoMain;
