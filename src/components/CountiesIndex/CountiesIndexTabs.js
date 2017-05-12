import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { changeWatching } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/countiesIndex';

class CountiesIndexTabs extends Component {
  handleSelect(eventKey) {
    this.props.changeWatching(eventKey);
  }

  render() {
    return(
      <Nav justified bsStyle="tabs"
        activeKey={this.props.selected}
        onSelect={this.handleSelect.bind(this)}>
        <NavItem eventKey={watchingValues.all}>Todos</NavItem>
        <NavItem eventKey={watchingValues.fav}>Favoritos</NavItem>
      </Nav>
    );
  }
}

const mapState = ({ countiesIndex }) => {
  return {
    selected: countiesIndex.selected
  };
};
const mapDispatch = { changeWatching };

export default connect(mapState, mapDispatch)(CountiesIndexTabs);
