import PropTypes from 'prop-types';
import React from 'react';
import { Input, Label } from 'reactstrap';

const EmployeeSalaryForm = ({ salary, updateSalary, valid }) => (
  <>
    <Label htmlFor="投保薪資">投保薪資</Label>
    <Input
      id="投保薪資"
      placeholder="請輸入投保薪資"
      value={salary}
      onChange={updateSalary}
      invalid={!valid}
    />
  </>
);

EmployeeSalaryForm.propTypes = {
  salary: PropTypes.string.isRequired,
  updateSalary: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default EmployeeSalaryForm;
