"use strict";

const React = require("react");
const { Input } = require("react-bootstrap");

let EmployeeSalaryForm = React.createClass({
  displayName: "EmployeeSalaryForm",
  propTypes: {
    setSalary: React.PropTypes.func,
  },
  getInitialState(){
    return ({
      salaryError: false
    });
  },

  handleSalaryChange(){
    let salary = this.refs.salary.getValue();
    if(!isNaN(parseFloat(salary)) && isFinite(salary)){
      this.props.setSalary(salary);
      this.setState({
        salaryError: false
      });
    } else {
      this.setState({
        salaryError: true
      });
    }
  },

  render(){
    let salaryError = this.state.salaryError ? {bsStyle: "error"} : null;
    return (
      <form>
        <Input ref="salary"
               onChange={this.handleSalaryChange}
               label="輸入薪資"
               placeholder="Enter Salary"
               type="text"
               {...salaryError} />
      </form>
    );
  }


});

module.exports = EmployeeSalaryForm;
