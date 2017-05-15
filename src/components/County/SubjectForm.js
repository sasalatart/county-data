import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Well, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import SubjectTable from './SubjectTable';
import { buildSubjectOptions, buildYearOptions } from '../../utils';

const SubjectForm = ({ subjects, subjectJSONArray, selectedSubject, selectedYear }) => {
  const data = _.find(subjectJSONArray, o => o.year === parseInt(selectedYear, 10)) || {};
  delete data._id;

  return(
    <Well>
      <form>
        <Row>
          <Col sm={6}>
            <FormGroup>
              <ControlLabel>Subject</ControlLabel>
              <Field name="name" component="select" className="form-control">
                { buildSubjectOptions(subjects, selectedSubject) }
              </Field>
            </FormGroup>
          </Col>

          <Col sm={6}>
            {
              selectedSubject &&
              <FormGroup>
                <ControlLabel>Year</ControlLabel>
                <Field name="year" component="select" className="form-control">
                  { buildYearOptions(subjects[selectedSubject], selectedYear) }
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

export default reduxForm({ form: 'subject' })(SubjectForm);
