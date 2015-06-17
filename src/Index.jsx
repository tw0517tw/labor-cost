"use strict";
require("bootstrap/dist/css/bootstrap.css");

const React = require("react");
const { Navbar,
  Grid, Row, Col } = require("react-bootstrap");

const EmployeeSalaryForm = require("./EmployeeSalaryForm.jsx");
const HealthInsuranceForm = require("./HealthInsuranceForm.jsx");
const LaborInsuranceForm = require("./LaborInsuranceForm.jsx");
const RetirePlanForm = require("./RetirePlanForm.jsx");

let Index = React.createClass({
  displayName: "Index",

  getInitialState(){
    return ({
      salary: 0
    });
  },

  setSalary(salary){
    this.setState({
      salary: salary
    });
  },

  render(){
    return (
      <div>
        <Navbar brand="勞保健保勞退" staticTop />
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <EmployeeSalaryForm setSalary={this.setSalary}/>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <HealthInsuranceForm salary={this.state.salary}/>
            </Col>
            <Col md={4}>
              <LaborInsuranceForm salary={this.state.salary}/>
            </Col>
            <Col md={4}>
              <RetirePlanForm salary={this.state.salary}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

React.render(<Index/>, document.getElementById("container"));
