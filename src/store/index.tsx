import { create, Mutate, StoreApi } from "zustand";
import { v4 as uuidv4 } from "uuid";
const todosStore = (set: any) => ({
  todos: [],
  addTodoItem: (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    set((state: any) => ({
      todos: [...state.todos, newTodo],
    }));
  },
});
const projectViewStore = (set: any) => ({
  display: false,
  setDisplay: (value: boolean) => {
    set((state: any) => ({
      display: value,
    }));
  },
});
export const useProjectView = create(projectViewStore);
