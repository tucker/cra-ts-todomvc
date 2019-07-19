import { Todo, TodoData, Visibility } from "../model";

export enum ActionType {
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  SET_ALL_STATES,
  REMOVE_COMPLETED,
  SET_VISIBILITY
};

export type Action =
| { type: ActionType.CREATE_TODO, title: string }
| { type: ActionType.UPDATE_TODO, id: number, changes: Partial<TodoData> }
| { type: ActionType.REMOVE_TODO, id: number }
| { type: ActionType.SET_ALL_STATES, state: boolean }
| { type: ActionType.REMOVE_COMPLETED }
| { type: ActionType.SET_VISIBILITY, filter: Visibility };

export const createTodo = (title: string): Action => ({
  type: ActionType.CREATE_TODO,
  title
});

export const updateTodo = (id: number, changes: Partial<TodoData>): Action => ({
  type: ActionType.UPDATE_TODO,
  id,
  changes
});

export const removeTodo = (id: number): Action => ({
  type: ActionType.REMOVE_TODO,
  id
});

export const setAllStates = (state: boolean): Action => ({
  type: ActionType.SET_ALL_STATES,
  state
});

export const removeCompleted = (): Action => ({
  type: ActionType.REMOVE_COMPLETED
});

export const setVisibility = (filter: Visibility): Action => ({
  type: ActionType.SET_VISIBILITY,
  filter
});
