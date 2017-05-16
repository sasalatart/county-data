import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Well, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';
import SubjectTable from './SubjectTable';
import { countyFormResetOnSubjectChange } from '../../redux/actions';
import { buildSubjectOptions, buildYearOptions } from '../../utils';

const SubjectForm = ({
  availableSubjects,
  selectedSubject,
  selectedYear,
  selectedIndicator,
  countyFormResetOnSubjectChange
}) => {
  const data = _.find(availableSubjects[selectedSubject], o => {
    return o.year === parseInt(selectedYear, 10);
  }) || {};
  delete data._id;

  const handleSubjectChange = evt => {
    const newSubject = availableSubjects[evt.target.value];
    const previousSubject = availableSubjects[selectedSubject];
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
                { buildSubjectOptions(availableSubjects, selectedSubject) }
              </Field>
            </FormGroup>
          </Col>

          <Col sm={6}>
            {
              selectedSubject &&
              <FormGroup>
                <ControlLabel>Year</ControlLabel>
                <Field name="year" component="select" className="form-control">
                  { buildYearOptions(availableSubjects[selectedSubject], selectedYear) }
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

SubjectForm.propTypes = {
  availableSubjects: PropTypes.object.isRequired,
  selectedSubject: PropTypes.string,
  selectedYear: PropTypes.number,
  selectedIndicator: PropTypes.string
};

const mapDispatch = { countyFormResetOnSubjectChange };

const form = reduxForm({ form: 'subject' })(SubjectForm);

export default connect(null, mapDispatch)(form);
