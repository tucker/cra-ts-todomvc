import { AppState } from "../model";
import { Action, ActionType } from "./actions";

let nextId = 1;

export const reducer = (state: AppState, action: Action): AppState => {

  switch (action.type) {
    case ActionType.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: nextId++, title: action.title, completed: false }]
      }
    case ActionType.UPDATE_TODO:
      const ix = state.todos.findIndex(t => t.id === action.id);
      const todo = { ...state.todos[ix], ...action.changes };
      return {
        ...state,
        todos: [...state.todos.slice(0, ix), todo, ...state.todos.slice(ix + 1)]
      }
    case ActionType.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(t => t.id !== action.id)]
      }
    case ActionType.SET_ALL_STATES:
      return {
        ...state,
        todos: [...state.todos.map(t => ({ ...t, completed: action.state }))]
      }
    case ActionType.REMOVE_COMPLETED:
      return {
        ...state,
        todos: [...state.todos.filter(t => !t.completed)]
      }
    case ActionType.SET_VISIBILITY:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  }
};
