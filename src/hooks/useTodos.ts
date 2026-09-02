import { useCallback, useEffect, useState } from 'react'

export type Todo = {
  id: string
  text: string
  completed: boolean
}

const STORAGE_KEY = 'todos'

function loadFromStorage(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    // Defensive validation: keep only entries that look like a Todo.
    return parsed.filter(
      (entry): entry is Todo =>
        typeof entry === 'object' &&
        entry !== null &&
        typeof (entry as Todo).id === 'string' &&
        typeof (entry as Todo).text === 'string' &&
        typeof (entry as Todo).completed === 'boolean',
    )
  } catch {
    return []
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadFromStorage)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch {
      // Storage may be unavailable (e.g. private mode / quota). Fail silently.
    }
  }, [todos])

  const addTodo = useCallback((text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const todo: Todo = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false,
    }
    setTodos((prev) => [...prev, todo])
  }, [])

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }, [])

  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  return { todos, addTodo, toggleTodo, removeTodo }
}
