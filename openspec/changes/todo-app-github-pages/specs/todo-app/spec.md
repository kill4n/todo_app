## ADDED Requirements

### Requirement: Add todo item
The system SHALL allow the user to add a new todo item by entering text and submitting. Empty or whitespace-only input MUST NOT create an item.

#### Scenario: Add valid item
- **WHEN** the user types "Buy milk" and submits
- **THEN** a new todo item with text "Buy milk" appears in the list

#### Scenario: Reject empty input
- **WHEN** the user submits with blank or whitespace-only text
- **THEN** no todo item is created

### Requirement: Toggle todo completion
The system SHALL allow the user to mark a todo item as complete or incomplete by toggling it.

#### Scenario: Toggle to complete
- **WHEN** the user clicks a todo item that is not complete
- **THEN** the item is marked complete

#### Scenario: Toggle back to incomplete
- **WHEN** the user clicks a todo item that is complete
- **THEN** the item is marked incomplete

### Requirement: Delete todo item
The system SHALL allow the user to remove a todo item from the list.

#### Scenario: Delete an item
- **WHEN** the user clicks the delete action on a todo item
- **THEN** the item is removed from the list

### Requirement: Persist todos locally
The system SHALL persist todos in the browser's localStorage so the list survives a page reload. Storage updates MUST occur whenever the todo list changes.

#### Scenario: Reload preserves list
- **WHEN** the user adds items and reloads the page
- **THEN** the previously added items are still displayed

#### Scenario: Storage stays empty with no todos
- **WHEN** the user has an empty todo list
- **THEN** attempting to load todos yields an empty list with no error