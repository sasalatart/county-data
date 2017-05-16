import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import _ from 'lodash';
import Header from './Header';
import SubjectForm from './SubjectForm';
import IndicatorForm from './IndicatorForm';
import Spinner from '../Spinner';
import { addToFavourites, removeFromFavourites } from '../../redux/actions';

const County = ({
  currentCounty,
  inFavourites,
  selectedSubject,
  selectedYear,
  selectedIndicator,
  addToFavourites,
  removeFromFavourites
}) => {
  currentCounty.statistics = _.omitBy(currentCounty.statistics, _.isEmpty);

  return (
    <Col sm={12}>
      { currentCounty.loading && <Spinner size={256} floats={true} /> }

      <Header
        currentCounty={currentCounty}
        inFavourites={inFavourites}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites} />

      <SubjectForm
        availableSubjects={currentCounty.statistics}
        selectedSubject={selectedSubject}
        selectedYear={selectedYear}
        selectedIndicator={selectedIndicator} />

      {
        selectedSubject && selectedYear &&
        <IndicatorForm
          availableSubjects={currentCounty.statistics}
          selectedSubject={selectedSubject}
          selectedIndicator={selectedIndicator} />
      }
    </Col>
  );
};

const mapState = ({ currentCounty, favouriteCounties, form: { subject, indicator } }) => {
  const favouriteIds = favouriteCounties.counties.map(({ _id }) => _id);

  return {
    currentCounty,
    inFavourites: _.includes(favouriteIds, currentCounty._id),
    selectedSubject: _.get(subject, 'values.name'),
    selectedYear: _.get(subject, 'values.year'),
    selectedIndicator: _.get(indicator, 'values.stat')
  };
};
const mapDispatch = { addToFavourites, removeFromFavourites };

export default connect(mapState, mapDispatch)(County);
