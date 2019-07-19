import React from 'react'
import TodoList from './TodoList';

const TodoMain = () => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList></TodoList>
    </section>
  )
}

export default TodoMain;
