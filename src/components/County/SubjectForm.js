import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, reset, change } from 'redux-form';
import { Well, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import SubjectTable from './SubjectTable';

import {
  buildSubjectOptions,
  buildYearOptions,
  buildTableData,
  countyFormResetOnSubjectChange,
  indicatorFormResetOnSubjectChange
} from '../../utils';

const SubjectForm = ({
  availableSubjects,
  selectedSubject,
  selectedYear,
  selectedIndicator,
  reset,
  change
}) => {
  const handleSubjectChange = evt => {
    const newSubject = availableSubjects[evt.target.value];
    countyFormResetOnSubjectChange(newSubject, selectedYear, change);
    indicatorFormResetOnSubjectChange(newSubject, selectedIndicator, reset);
  };

  return(
    <Well>
      <form>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <ControlLabel>Subject</ControlLabel>
              <Field
                name="name"
                component="select"
                className="form-control"
                onChange={handleSubjectChange}>
                { buildSubjectOptions(availableSubjects, selectedSubject) }
              </Field>
            </FormGroup>
          </Col>

          <Col sm={6}>
            {
              selectedSubject &&
              <FormGroup>
                <ControlLabel>Year</ControlLabel>
                <Field
                  name="year"
                  component="select"
                  className="form-control">
                  { buildYearOptions(availableSubjects[selectedSubject], selectedYear) }
                </Field>
              </FormGroup>
            }
          </Col>
        </Row>
      </form>

      {
        selectedSubject && selectedYear &&
        <SubjectTable data={buildTableData(availableSubjects[selectedSubject], selectedYear)} />
      }
    </Well>
  );
};

SubjectForm.propTypes = {
  availableSubjects: PropTypes.object.isRequired,
  selectedSubject: PropTypes.string,
  selectedYear: PropTypes.string,
  selectedIndicator: PropTypes.string
};

const mapDispatch = { reset, change };

const form = reduxForm({ form: 'subject' })(SubjectForm);

export default connect(null, mapDispatch)(form);
