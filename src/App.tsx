import { useTodos } from './hooks/useTodos'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoList } from './components/TodoList'
import './App.css'

function countRemaining(todos: { completed: boolean }[]): number {
  return todos.filter((todo) => !todo.completed).length
}

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
  const remaining = countRemaining(todos)

  return (
    <main className="app">
      <section className="card" aria-label="Todo list">
        <header className="header">
          <h1>Tasks</h1>
          <p className="subtitle">
            {remaining === 0
              ? 'All caught up'
              : `${remaining} ${remaining === 1 ? 'task' : 'tasks'} remaining`}
          </p>
        </header>

        <AddTodoForm onAdd={addTodo} />

        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
      </section>
    </main>
  )
}

export default App