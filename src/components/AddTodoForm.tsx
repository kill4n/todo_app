import { useState, type FormEvent } from 'react'

type AddTodoFormProps = {
  onAdd: (text: string) => void
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [draft, setDraft] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    onAdd(text)
    setDraft('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="new-todo">
        New todo
      </label>
      <input
        id="new-todo"
        className="add-input"
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Add a task…"
        autoComplete="off"
        maxLength={280}
      />
      <button className="add-button" type="submit" disabled={!draft.trim()}>
        Add
      </button>
    </form>
  )
}
