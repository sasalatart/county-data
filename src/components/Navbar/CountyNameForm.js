import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { changeWatching, searchByName, clearCountySearch } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/allCounties';
import {
  Navbar,
  FormGroup,
  InputGroup,
  Glyphicon,
  Button
} from 'react-bootstrap';

const countyNameForm = ({ changeWatching, searchByName, clearCountySearch }) => {
  const handleClick = () => {
    clearCountySearch();
    changeWatching(watchingValues.all);
  };

  return(
    <Navbar.Form pullLeft>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
          <Field
            name="countyName"
            component="input"
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={evt => searchByName(evt.target.value, 1)} />
        </InputGroup>
      </FormGroup>
      { ' ' }
      <Button type="button" onClick={handleClick}>Clear Search</Button>
    </Navbar.Form>
  );
};

const form = reduxForm({ form: 'countySearch' })(countyNameForm);

const mapDispatch = { changeWatching, searchByName, clearCountySearch };
export default connect(null, mapDispatch)(form);
