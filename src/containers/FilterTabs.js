import { connect } from 'react-redux';

import Tabs from '../components/Tabs';
import { setFilter } from '../lib/actions';

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  onClick: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
