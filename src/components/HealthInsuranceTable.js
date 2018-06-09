import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Input } from 'reactstrap';

import findRank from '../utils/findRank';
import healthInsuranceFee from '../data/healthInsuranceFee';

class HealthInsuranceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      familyCount: 0,
    };
  }

  onFamilyCountChange = e => {
    const familyCount = +e.target.value;
    this.setState(() => ({ familyCount }));
  };

  render() {
    const familyCountSelect = (
      <Input type="select" onChange={this.onFamilyCountChange}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3或以上</option>
      </Input>
    );

    const rankedSalary = findRank(this.props.salary, healthInsuranceFee.rank);
    const totalFee = rankedSalary * healthInsuranceFee.rate;
    const youPay =
      Math.round(totalFee * healthInsuranceFee.ratio.company.you) *
      (1 + this.state.familyCount);
    const bossPay = Math.round(
      totalFee *
        healthInsuranceFee.ratio.company.boss *
        (1 + healthInsuranceFee.avgFamilyMember)
    );
    const govPay = Math.round(
      totalFee *
        healthInsuranceFee.ratio.company.gov *
        (1 + healthInsuranceFee.avgFamilyMember)
    );
    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="2">健保</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>投保級距</td>
            <td>{rankedSalary}</td>
          </tr>
          <tr>
            <td>扶養眷屬</td>
            <td>{familyCountSelect}</td>
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
  }
}

HealthInsuranceTable.propTypes = {
  salary: PropTypes.number.isRequired,
};

export default HealthInsuranceTable;
