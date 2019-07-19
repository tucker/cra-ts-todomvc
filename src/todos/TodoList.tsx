import React from 'react'
import TodoItem from './TodoItem';
import { useAppState } from './store';

const TodoList = () => {

  const todos = useAppState(state => state.todos) ;

  return (
    <ul className="todo-list">
      { todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </ul>
  )
}

export default TodoList;
