import React, { SyntheticEvent } from 'react'
import { useDispatch, createTodo } from './store';

const TodoInput = () => {

  const dispatch = useDispatch();

  const handleInput = (ev: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (ev.nativeEvent.key === 'Enter') {
      dispatch(createTodo(ev.currentTarget.value));
      ev.currentTarget.value = '';
    }
  }

  return (
    <input onKeyUp={handleInput} className="new-todo" placeholder="What needs to be done?" autoFocus />
  )
}

export default TodoInput;
