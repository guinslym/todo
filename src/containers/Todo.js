import { connect } from 'react-redux';

import { toggleTodo, deleteTodo, updateTodo } from '../lib/actions';
import Item from '../components/Item';

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
