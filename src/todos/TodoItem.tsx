import React from 'react'

const TodoItem = () => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>Buy a unicorn</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" defaultValue="Rule the web" />
    </li>
  )
}

export default TodoItem;
