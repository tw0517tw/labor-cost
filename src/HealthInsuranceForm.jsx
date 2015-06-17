"use strict";

const React = require("react");
const { Table } = require("react-bootstrap");

const healthInsuranceFee = require("./lib/healthInsuranceFee.js");
const findRank = require("./lib/findRank.js");

let HealthInsuranceForm = React.createClass({
  displayName: "HealthInsuranceForm",
  propTypes: {
    salary: React.PropTypes.number
  },

  render(){
    let rankedSalary = findRank(this.props.salary, healthInsuranceFee.rank);
    let totalFee = Math.round(rankedSalary * healthInsuranceFee.rate);
    let youPay = Math.round(totalFee * healthInsuranceFee.ratio.company.you);
    let bossPay = Math.round(totalFee * healthInsuranceFee.ratio.company.boss * (1+healthInsuranceFee.avgFamilyMember));
    let govPay = Math.round(totalFee * healthInsuranceFee.ratio.company.gov * (1+healthInsuranceFee.avgFamilyMember));
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
});

module.exports = HealthInsuranceForm;
