// contexts/index.js
import { createContext, useContext } from "react";

/**
 * TodoContext - Provides global state management for todos
 * Includes default structure for todos with basic CRUD operations
 */
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      task: "reading",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

/**
 * useTodo - Custom hook for accessing todo context
 * Provides cleaner syntax for consuming context
 */
export function useTodo() {
  return useContext(TodoContext);
}
