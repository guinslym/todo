export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
});

export const createTodo = (text, id) => ({
  type: 'CREATE_TODO',
  text,
  id
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleAllTodos = value => ({
  type: 'TOGGLE_ALL_TODOS',
  value
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const clearCompletedTodos = () => ({
  type: 'CLEAR_COMPLETED_TODOS'
})

export const updateTodo = (id, text) => ({
  type: 'UPDATE_TODO',
  id,
  text
});
