import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import _ from 'lodash';
import SubjectForm from './SubjectForm';
import SubjectTable from './SubjectTable';

class County extends Component {
  render() {
    const { county, selectedSubject, tableData } = this.props;

    return(
      <div>
        <Jumbotron>
          <h1>{ county.name }</h1>
          <h3>{ county.state }</h3>
        </Jumbotron>
        <SubjectForm selectedSubject={selectedSubject} statistics={county.statistics} />
        {
          tableData &&
          <SubjectTable data={tableData} />
        }
      </div>
    );
  }
}

const mapState = ({ currentCounty, form: { subject } }) => {
  const selectedSubject = _.get(subject, 'values.name');
  const selectedYear = _.get(subject, 'values.year');
  const subjectJSONArray = _.get(currentCounty.statistics, `${selectedSubject}`, []);

  let tableData = _.find(subjectJSONArray, o => o.year === parseInt(selectedYear)) || {};
  delete tableData._id;

  return {
    selectedSubject,
    tableData
  };
};

export default connect(mapState)(County);
