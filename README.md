# Todo App with Context API and Local Storage

A full-featured Todo application built with React that demonstrates advanced state management using Context API and local storage persistence. This project implements a complete CRUD (Create, Read, Update, Delete) application with a modern UI.

## Key Concepts Demonstrated

- Context API for global state management
- Local Storage for data persistence
- Custom hooks for context consumption
- Component composition and reusability
- CRUD operations implementation
- Modern UI with Tailwind CSS

## Features

- Add new todo items
- Edit existing todos
- Mark todos as complete/incomplete
- Delete todos
- Data persistence with browser's local storage
- Dynamic UI updates based on todo state
- Responsive design with Tailwind CSS

## Project Structure

- `contexts/TodoContext.js` - Defines the context structure and custom hook
- `components/TodoForm.jsx` - Form component for adding new todos
- `components/TodoItem.jsx` - Individual todo item with edit/delete capabilities
- `components/index.js` - Barrel file for component exports
- `App.jsx` - Main component with context provider implementation

## Technical Implementation

The application demonstrates advanced React patterns including:
- Context Provider pattern for state sharing
- Custom hooks for cleaner component code
- Function memoization with useCallback
- Side effects with useEffect for local storage
- Conditional rendering and styling
- Event handling with state updates