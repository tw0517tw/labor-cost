import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import findRank from '../utils/findRank';
import retirePlanFee from '../data/retirePlanFee';

const RetirePlanTable = ({ salary }) => {
  const rankedSalary = findRank(salary, retirePlanFee.rank);
  const totalFee = Math.round(rankedSalary * retirePlanFee.rate);

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan="2">勞退6%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>投保級距</td>
          <td>{rankedSalary}</td>
        </tr>
        <tr>
          <td>雇主負擔</td>
          <td>{totalFee}</td>
        </tr>
      </tbody>
    </Table>
  );
};

RetirePlanTable.propTypes = {
  salary: PropTypes.number.isRequired,
};

export default RetirePlanTable;
