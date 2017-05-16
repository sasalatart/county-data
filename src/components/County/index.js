import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import _ from 'lodash';
import Header from './Header';
import SubjectForm from './SubjectForm';
import IndicatorForm from './IndicatorForm';

const County = ({
  currentCounty,
  selectedSubject,
  selectedYear,
  selectedIndicator
}) => {
  currentCounty.statistics = _.omitBy(currentCounty.statistics, _.isEmpty);

  return(
    <Col sm={12}>
      <Header />

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

const mapState = ({ currentCounty, form: { subject, indicator } }) => {
  return {
    currentCounty,
    selectedSubject: _.get(subject, 'values.name'),
    selectedYear: _.get(subject, 'values.year'),
    selectedIndicator: _.get(indicator, 'values.stat')
  };
};

export default connect(mapState)(County);
