import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import _ from 'lodash';
import CountiesPaginator from './CountiesPaginator';
import { fetchAllCounties, searchByName, fetchCounty } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/allCounties';
import { buildGroupItems } from '../../utils';

class CountiesList extends Component {
  properDisplay() {
    const allCounties = {
      ...this.props.allCounties,
      fetchFunction: this.props.fetchAllCounties
    };

    const search = {
      ...this.props.search,
      fetchFunction: this.props.searchByName,
      countyName: this.props.searchName
    };

    return allCounties.selected === watchingValues.all ? allCounties : search;
  }

  handleCountyClick(id) {
    this.props.fetchCounty(id, this.props.subjectForm);
  }

  render() {
    const properDisplay = this.properDisplay();

    return(
      <div>
        <CountiesPaginator { ...properDisplay } />

        <ListGroup>
          {
            buildGroupItems(properDisplay.counties,
              this.handleCountyClick.bind(this),
              this.props.currentCounty)
          }
        </ListGroup>

        <CountiesPaginator { ...properDisplay } />
      </div>
    );
  }
}

const mapState = ({
  allCounties,
  currentCounty,
  search,
  form: { countySearch, subject }}) => {
  return {
    allCounties,
    currentCounty,
    search,
    searchName: _.get(countySearch, 'values.name'),
    subjectForm: subject
  };
};
const mapDispatch = ({ fetchAllCounties, searchByName, fetchCounty });

export default connect(mapState, mapDispatch)(CountiesList);
