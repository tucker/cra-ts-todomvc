import { Todo } from "./todo-interface";

export enum Visibility {
  All,
  Active,
  Completed
};

export interface AppState {
  todos: Todo[],
  filter: Visibility
}
