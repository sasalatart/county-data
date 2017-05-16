import React from 'react';
import { connect } from 'react-redux';
import { Col, Jumbotron } from 'react-bootstrap';
import _ from 'lodash';
import SubjectForm from './SubjectForm';
import IndicatorForm from './IndicatorForm';

const County = ({ currentCounty, selectedSubject, selectedYear, selectedIndicator }) => {
  currentCounty.statistics = _.omitBy(currentCounty.statistics, _.isEmpty);

  return(
    <Col sm={12}>
      <Jumbotron>
        <h1>{ currentCounty.name }</h1>
        <h3>{ currentCounty.state }</h3>
      </Jumbotron>

      <SubjectForm
        selectedSubject={selectedSubject}
        selectedYear={selectedYear}
        selectedIndicator={selectedIndicator}
        currentCounty={currentCounty} />

      {
        selectedSubject && selectedYear &&
        <IndicatorForm
          selectedSubject={selectedSubject}
          selectedIndicator={selectedIndicator}
          currentCounty={currentCounty} />
      }
    </Col>
  );
};

const mapState = ({ currentCounty, form: { subject, indicator } }) => {
  const selectedSubject = _.get(subject, 'values.name');

  return {
    currentCounty,
    selectedSubject,
    selectedYear: _.get(subject, 'values.year'),
    selectedIndicator: _.get(indicator, 'values.stat')
  };
};

export default connect(mapState)(County);
