import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
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

        <NavItem
          eventKey={watchingValues.search}
          disabled={this.props.pageCountiesFromSearch.length === 0}>
          Búsqueda
        </NavItem>
      </Nav>
    );
  }
}

export default CountiesIndexTabs;
