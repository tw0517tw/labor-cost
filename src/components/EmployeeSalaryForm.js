import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';

const EmployeeSalaryForm = ({ salary, updateSalary, valid }) => (
  <Fragment>
    <Label htmlFor="投保薪資">投保薪資</Label>
    <Input
      id="投保薪資"
      placeholder="請輸入投保薪資"
      value={salary}
      onChange={updateSalary}
      invalid={!valid}
    />
  </Fragment>
);

EmployeeSalaryForm.propTypes = {
  salary: PropTypes.string.isRequired,
  updateSalary: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default EmployeeSalaryForm;
