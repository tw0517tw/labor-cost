"use strict";

const React = require("react");
const { Table, Input } = require("react-bootstrap");

const healthInsuranceFee = require("./lib/healthInsuranceFee.js");
const findRank = require("./lib/findRank.js");

let HealthInsuranceForm = React.createClass({
  displayName: "HealthInsuranceForm",
  propTypes: {
    salary: React.PropTypes.number
  },

  getInitialState(){
    return ({
      familyCount: 0
    });
  },

  onFamilyCountChange(){
    this.setState({familyCount: this.refs.familyCount.getValue()});
  },

  render(){
    let familyCountSelect = (
      <Input ref="familyCount" type="select" onChange={this.onFamilyCountChange}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3或以上</option>
      </Input>
    );

    let rankedSalary = findRank(this.props.salary, healthInsuranceFee.rank);
    let totalFee = Math.round(rankedSalary * healthInsuranceFee.rate);
    let youPay = Math.round(totalFee * healthInsuranceFee.ratio.company.you) * (1+parseInt(this.state.familyCount));
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
});

module.exports = HealthInsuranceForm;
