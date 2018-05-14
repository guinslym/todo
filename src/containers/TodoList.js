import { connect } from 'react-redux';

import { toggleAllTodos, clearCompletedTodos } from '../lib/actions';
import List from '../components/List';

const mapStateToProps = ({ filter, todos }) => ({
  todos: todos.filter(
    todo =>
      filter === 'ALL' ||
      (todo.completed && filter === 'COMPLETED') ||
      (!todo.completed && filter === 'ACTIVE')
  )
});

const mapDispatchToProps = dispatch => ({
  toggleAll: filter => dispatch(toggleAllTodos(filter)),
  clear: () => dispatch(clearCompletedTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
