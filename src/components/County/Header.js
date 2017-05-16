import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap';

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

Header.propTypes = {
  currentCounty: PropTypes.object.isRequired,
  inFavourites: PropTypes.bool.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  removeFromFavourites: PropTypes.func.isRequired
};

export default Header;
