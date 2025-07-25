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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Todo Master
            </h1>
            <p className="text-gray-600 text-lg">
              Organize your life, one task at a time
            </p>
          </div>

          {/* Todo Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="space-y-4">
            {todos.length === 0 ? (
              <div className="text-center py-10">
                <div className="text-gray-400 text-xl mb-2">📭</div>
                <p className="text-gray-500">Your todo list is empty</p>
                <p className="text-gray-400 text-sm">
                  Add a task to get started!
                </p>
              </div>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </div>

          {/* Stats */}
          {todos.length > 0 && (
            <div className="mt-6 text-sm text-gray-500 text-center">
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
