import type { Todo } from '../hooks/useTodos'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const label = `${todo.completed ? 'Mark as incomplete' : 'Mark as complete'}: ${todo.text}`

  return (
    <li className="todo-item">
      <button
        type="button"
        className="todo-toggle"
        aria-pressed={todo.completed}
        aria-label={label}
        onClick={() => onToggle(todo.id)}
      >
        <span
          className="todo-checkbox"
          aria-hidden="true"
          data-completed={todo.completed}
        />
        <span className="todo-text" data-completed={todo.completed}>
          {todo.text}
        </span>
      </button>
      <button
        type="button"
        className="todo-delete"
        aria-label={`Delete: ${todo.text}`}
        onClick={() => onRemove(todo.id)}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 6l12 12M18 6L6 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </li>
  )
}
