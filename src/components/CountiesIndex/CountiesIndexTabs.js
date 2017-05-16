import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { changeWatching } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/allCounties';

const CountiesIndexTabs = ({
  activeKey,
  countiesFromSearch,
  countiesFromFavourites,
  changeWatching
}) => {
  return(
    <Nav justified bsStyle="tabs"
      activeKey={activeKey}
      onSelect={eventKey => changeWatching(eventKey)}>
      <NavItem eventKey={watchingValues.all}>Todos</NavItem>

      <NavItem
        eventKey={watchingValues.fav}
        disabled={countiesFromFavourites.length === 0}>
        Favoritos
      </NavItem>

      <NavItem
        eventKey={watchingValues.search}
        disabled={countiesFromSearch.length === 0}>
        Búsqueda
      </NavItem>
    </Nav>
  );
};

const mapState = ({ allCounties, searchedCounties, favouriteCounties }) => {
  return {
    activeKey: allCounties.selected,
    countiesFromFavourites: favouriteCounties.counties,
    countiesFromSearch: searchedCounties.counties
  };
};
const mapDispatch = { changeWatching };

export default connect(mapState, mapDispatch)(CountiesIndexTabs);
