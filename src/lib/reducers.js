import { combineReducers } from 'redux';

const Filters = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE'
};

function todos(state = [], action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return action.text
        ? [
            {
              id: action.id,
              text: action.text,
              completed: false
            },
            ...state
          ]
        : state;

    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'TOGGLE_ALL_TODOS':
      return state.map(todo => ({ ...todo, completed: action.value }));

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'CLEAR_COMPLETED_TODOS':
      return state.filter(todo => !todo.completed);

    case 'UPDATE_TODO':
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      );

    default:
      return state;
  }
}

function filter(state = Filters.ALL, action) {
  if (action.type === 'SET_FILTER') return action.filter;
  return state;
}

export default combineReducers({
  todos,
  filter
});
