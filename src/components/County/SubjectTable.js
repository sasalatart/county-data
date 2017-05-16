import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import decamelize from 'decamelize';

const SubjectTable = ({ data }) => {
  const rows = Object.keys(data).map(key => {
    return(
      <tr key={key}>
        <td>{ decamelize(key, ' ') }</td>
        <td>{ data[key] }</td>
      </tr>
    );
  });

  return(
    <Table striped bordered condensed hover>
      <tbody>{rows}</tbody>
    </Table>
  );
};

SubjectTable.propTypes = {
  data: PropTypes.object.isRequired
};

export default SubjectTable;
