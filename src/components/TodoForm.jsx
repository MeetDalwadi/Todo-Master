// components/TodoForm.js
import { useState } from "react";
import { useTodo } from "../contexts/index";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    
    addTodo({ 
      task: todo, 
      completed: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 px-4 py-3 text-base sm:text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm"
          placeholder="What needs to be done?"
          autoFocus
        />
        <button
          type="submit"
          className="px-4 py-3 sm:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-md active:scale-95"
        >
          <span className="block sm:inline">Add Task</span>
        </button>
      </div>
    </form>
  );
}

export default TodoForm;