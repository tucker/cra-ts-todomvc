import React from 'react'
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoToolbar from './TodoToolbar';

const TodoShell = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput></TodoInput>
      </header>
      <TodoMain></TodoMain>
      <TodoToolbar></TodoToolbar>
    </section>
  )
}

export default TodoShell;
