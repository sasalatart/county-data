import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Jumbotron } from 'react-bootstrap';
import _ from 'lodash';
import SubjectForm from './SubjectForm';
import IndicatorForm from './IndicatorForm';

class County extends Component {
  render() {
    const { county, selectedSubject, selectedYear, selectedIndicator, subjectJSONArray } = this.props;
    county.statistics = _.omitBy(county.statistics, _.isEmpty);

    return(
      <Col sm={12}>
        <Jumbotron>
          <h1>{ county.name }</h1>
          <h3>{ county.state }</h3>
        </Jumbotron>

        <SubjectForm
          selectedSubject={selectedSubject}
          selectedYear={selectedYear}
          subjects={county.statistics}
          subjectJSONArray={subjectJSONArray} />

        {
          selectedSubject && selectedYear &&
          <IndicatorForm
            indicators={Object.keys(subjectJSONArray[0])}
            selectedIndicator={selectedIndicator}
            subjectJSONArray={subjectJSONArray} />
        }
      </Col>
    );
  }
}

const mapState = ({ currentCounty, form: { subject, indicator } }) => {
  const selectedSubject = _.get(subject, 'values.name');

  return {
    selectedSubject,
    selectedYear: _.get(subject, 'values.year'),
    selectedIndicator: _.get(indicator, 'values.stat'),
    subjectJSONArray: _.get(currentCounty.statistics, `${selectedSubject}`, [])
  };
};

export default connect(mapState)(County);
