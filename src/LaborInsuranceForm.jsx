"use strict";

const React = require("react");
const { Table } = require("react-bootstrap");

const laborInsuranceFee = require("./lib/laborInsuranceFee.js");
const findRank = require("./lib/findRank.js");

let LaborInsuranceForm = React.createClass({
  displayName: "LaborInsuranceForm",
  propTypes: {
    salary: React.PropTypes.number
  },

  render(){
    let rankedSalary = findRank(this.props.salary, laborInsuranceFee.rank);
    let totalFee = Math.round(rankedSalary * laborInsuranceFee.rate);
    let youPay = Math.round(totalFee * laborInsuranceFee.ratio.company.you);
    let bossPay = Math.round(totalFee * laborInsuranceFee.ratio.company.boss);
    let govPay = Math.round(totalFee * laborInsuranceFee.ratio.company.gov);
    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="2">勞保+就保</th>
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

module.exports = LaborInsuranceForm;
