import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'react-bootstrap';
import _ from 'lodash';
import { addToFavourites, removeFromFavourites } from '../../redux/actions';

const Header = ({
  currentCounty,
  inFavourites,
  addToFavourites,
  removeFromFavourites
}) => {
  const buttonToRender = inFavourites ?
    <Button bsStyle="warning" onClick={() => removeFromFavourites(currentCounty._id)}>
      Remove From Favourites
    </Button> :
    <Button bsStyle="primary" onClick={() => addToFavourites(currentCounty)}>
      Add To Favourites
    </Button>;

  return(
    <Jumbotron>
      <h1>{ currentCounty.name }</h1>
      <h3>{ currentCounty.state }</h3>
      <div className="flex-justify-center">{ buttonToRender }</div>
    </Jumbotron>
  );
};

const mapState = ({ currentCounty, favouriteCounties }) => {
  return {
    currentCounty,
    inFavourites: _.includes(favouriteCounties.counties.map(({ _id }) => _id), currentCounty._id)
  };
};
const mapDispatch = { addToFavourites, removeFromFavourites };

export default connect(mapState, mapDispatch)(Header);
