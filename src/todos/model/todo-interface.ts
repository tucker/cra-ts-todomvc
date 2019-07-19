export interface TodoData {
  title: string;
  completed: boolean;
}

export interface Todo extends TodoData {
  id: number;
}
