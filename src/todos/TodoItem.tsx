import React, { FunctionComponent, useState, createRef, useEffect, SyntheticEvent } from 'react'
import { Todo } from './model';
import { useDispatch, updateTodo, removeTodo } from './store';

const TodoItem: FunctionComponent<{ todo: Todo }> = ({ todo }) => {

  // Internal State
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // External State
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateTodo(todo.id, { completed: !todo.completed }));
  }
  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  }
  const handleUpdateTitle = (title: string) => {
    dispatch(updateTodo(todo.id, { title}))
  }

  // Editing

  // Set Focus on editing
  let editField = createRef<HTMLInputElement>();
  useEffect(() => { editMode && editField.current!.focus() }, [editMode, editField])

  // commiting edit (via enter key or blur)
  const commitEdit = () => {
    const title = editTitle.trim();
    if (title.length) {
      handleUpdateTitle(title);
    } else {
      handleRemove();
    }
    setEditMode(false);
  }

  // handle Enter and Esc on editField
  const handleKeyUp = (ev: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    if (ev.nativeEvent.key === 'Enter') {
      commitEdit();
    } else if (ev.nativeEvent.key === 'Escape') {
      setEditTitle(todo.title);
      setEditMode(false);
    }
  }

  // handle blur event
  const handleBlur = () => {
    commitEdit();
  }

  return (
    <li className={[todo.completed ? 'completed' : '', editMode ? 'editing' : ''].join(' ')}>
      {!editMode ?
        (
          <div className="view">
            <input className="toggle" type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <label onDoubleClick={() => setEditMode(true)}>{todo.title}</label>
            <button className="destroy" onClick={handleRemove}></button>
          </div>
        )
        :
        (
          <input className="edit" value={editTitle} onChange={(ev => setEditTitle(ev.target.value))}
            ref={editField} onKeyUp={handleKeyUp} onBlur={handleBlur}
          />
        )
      }
    </li>
  )
}

export default TodoItem;
