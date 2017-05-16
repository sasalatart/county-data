import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Well, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import SubjectTable from './SubjectTable';
import { countyFormResetOnSubjectChange } from '../../redux/actions';
import { buildSubjectOptions, buildYearOptions } from '../../utils';

const SubjectForm = ({
  currentCounty,
  selectedSubject,
  selectedYear,
  selectedIndicator,
  countyFormResetOnSubjectChange
}) => {
  const { statistics } = currentCounty;

  const data = _.find(statistics[selectedSubject], o => {
    return o.year === parseInt(selectedYear, 10);
  }) || {};
  delete data._id;

  const handleSubjectChange = evt => {
    const newSubject = statistics[evt.target.value];
    const previousSubject = statistics[selectedSubject];
    countyFormResetOnSubjectChange(newSubject, previousSubject, selectedYear, selectedIndicator);
  };

  return(
    <Well>
      <form>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <ControlLabel>Subject</ControlLabel>
              <Field name="name" component="select" className="form-control" onChange={handleSubjectChange}>
                { buildSubjectOptions(statistics, selectedSubject) }
              </Field>
            </FormGroup>
          </Col>

          <Col sm={6}>
            {
              selectedSubject &&
              <FormGroup>
                <ControlLabel>Year</ControlLabel>
                <Field name="year" component="select" className="form-control">
                  { buildYearOptions(statistics[selectedSubject], selectedYear) }
                </Field>
              </FormGroup>
            }
          </Col>
        </Row>
      </form>

      { selectedSubject && selectedYear && <SubjectTable data={data} /> }
    </Well>
  );
};

const form = reduxForm({ form: 'subject' })(SubjectForm);

const mapDispatch = { countyFormResetOnSubjectChange };

export default connect(null, mapDispatch)(form);
