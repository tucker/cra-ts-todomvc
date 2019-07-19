import React, { FunctionComponent } from 'react'
import TodoItem from './TodoItem';
import { Todo } from './model';

const TodoList: FunctionComponent<{todos: Todo[]}> = ({todos}) => {

  return (
    <ul className="todo-list">
      { todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </ul>
  )
}

export default TodoList;
