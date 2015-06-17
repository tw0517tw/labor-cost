"use strict";

const React = require("react");
const { Table } = require("react-bootstrap");

const retirePlanFee = require("./lib/retirePlanFee.js");
const findRank = require("./lib/findRank.js");

let RetirePlanForm = React.createClass({
  displayName: "RetirePlanForm",
  propTypes: {
    salary: React.PropTypes.number
  },

  render(){
    let rankedSalary = findRank(this.props.salary, retirePlanFee.rank);
    let totalFee = Math.round(rankedSalary * retirePlanFee.rate);

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
  }
});

module.exports = RetirePlanForm;
