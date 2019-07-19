import React from 'react'
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoToolbar from './TodoToolbar';
import { AppState, Visibility } from './model';
import { Store, reducer } from './store';

const TodoShell = () => {

  const initialState: AppState = {
    todos: [],
    filter: Visibility.All
  };

  return (
    <Store reducer={reducer} initialState={initialState}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput></TodoInput>
        </header>
        <TodoMain></TodoMain>
        <TodoToolbar></TodoToolbar>
      </section>
    </Store>
  )
}

export default TodoShell;
