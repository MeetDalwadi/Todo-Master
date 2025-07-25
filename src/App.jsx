// App.js
import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/index";
import { TodoForm, TodoItem } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos?.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-4 md:py-8 flex flex-col">
        <div
          className="w-full px-4 mx-auto flex-1"
          style={{ maxWidth: "100%", width: "100%" }}
        >
          {/* Header - Mobile Optimized */}
          <div className="text-center mb-6 md:mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2 md:mb-4">
              Todo Master
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Organize your life, one task at a time
            </p>
          </div>

          {/* Todo Form - Mobile Optimized */}
          <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 mb-6 md:mb-8">
            <TodoForm />
          </div>

          {/* Todo List - Mobile Optimized */}
          <div className="space-y-3 md:space-y-4">
            {todos.length === 0 ? (
              <div className="text-center py-8 md:py-10">
                <div className="text-gray-400 text-2xl mb-3">📭</div>
                <p className="text-gray-500 text-base md:text-lg">
                  Your todo list is empty
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Add a task to get started!
                </p>
              </div>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </div>

          {/* Stats - Mobile Optimized */}
          {todos.length > 0 && (
            <div className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500 text-center">
              {todos.filter((t) => t.completed).length} of {todos.length} tasks
              completed
            </div>
          )}
        </div>
        <footer className="text-center py-4 text-gray-500 text-sm mt-8">
          Created by Meet Dalwadi
        </footer>
      </div>
    </TodoProvider>
  );
}

export default App;
