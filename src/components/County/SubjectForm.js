import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, FormGroup, ControlLabel } from 'react-bootstrap';
import { buildSubjectOptions, buildYearOptions } from '../../utils';

const SubjectForm = ({ selectedSubject, selectedYear, statistics }) => {
  return(
    <form>
      <Col sm={6}>
        <FormGroup>
          <ControlLabel>Subject</ControlLabel>
          <Field
            name="name"
            component="select"
            className="form-control">
            { buildSubjectOptions(statistics, selectedSubject) }
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
              { buildYearOptions(statistics[selectedSubject], selectedYear) }
            </Field>
          </FormGroup>
        }
      </Col>
    </form>
  );
};

export default reduxForm({ form: 'subject' })(SubjectForm);
