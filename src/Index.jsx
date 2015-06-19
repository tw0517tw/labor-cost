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
          <a href="https://github.com/tw0517tw/labor-cost">
            <img alt="Fork me on GitHub"
                 data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
                 src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
                 style={{position: "absolute", top: 0, right: 0, border: 0, zIndex:9999}}
            />
          </a>
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
          <Row>
            <Col className="text-center" md={6} mdOffset={3}>
              <span>使用薪資級距自 104年7月1日 開始適用</span><br/>
              健保資料來自<a href="http://www.nhi.gov.tw/webdata/webdata.aspx?menu=17&menu_id=1027&webdata_id=4110&WD_ID=1037">衛福部健保署</a>
              <br/>
              勞保資料來自<a href="http://www.bli.gov.tw/sub.aspx?a=UA2ZR%2bHjzD4%3d">勞動部勞保局</a>
              <br/>
              勞退資料來自<a href="http://www.bli.gov.tw/sub.aspx?a=uyDH38mCe%2fM%3d">勞動部勞保局</a>
              <br/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

React.render(<Index/>, document.getElementById("container"));
