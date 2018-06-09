import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import findRank from '../utils/findRank';
import laborInsuranceFee from '../data/laborInsuranceFee';

const LaborInsuranceTable = ({ salary }) => {
  const rankedSalary = findRank(salary, laborInsuranceFee.rank);
  const totalFee = rankedSalary * laborInsuranceFee.rate;
  const youPay = Math.round(totalFee * laborInsuranceFee.ratio.company.you);
  const bossPay = Math.round(totalFee * laborInsuranceFee.ratio.company.boss);
  const govPay = Math.round(totalFee * laborInsuranceFee.ratio.company.gov);

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan="2">勞保+就保 (未包含職災費率)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>投保級距</td>
          <td>{rankedSalary}</td>
        </tr>
        <tr>
          <td>個人負擔</td>
          <td>{youPay}</td>
        </tr>
        <tr>
          <td>雇主負擔</td>
          <td>{bossPay}</td>
        </tr>
        <tr>
          <td>政府負擔</td>
          <td>{govPay}</td>
        </tr>
      </tbody>
    </Table>
  );
};

LaborInsuranceTable.propTypes = {
  salary: PropTypes.number.isRequired,
};

export default LaborInsuranceTable;
