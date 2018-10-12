import React, { Component } from 'react';
import { Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap';

import EmployeeSalaryForm from './components/EmployeeSalaryForm';
import HealthInsuranceTable from './components/HealthInsuranceTable';
import LaborInsuranceTable from './components/LaborInsuranceTable';
import RetirePlanTable from './components/RetirePlanTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salaryInput: '',
      isSalaryValid: true,
      lastValidSalary: 0,
    };
  }

  handleSalaryChange = e => {
    const salaryInput = e.target.value;
    const salaryNumber = +salaryInput;

    if (Number.isNaN(salaryNumber) || !Number.isFinite(salaryNumber)) {
      this.setState(() => ({ salaryInput, isSalaryValid: false }));
      return;
    }
    this.setState(() => ({
      salaryInput,
      isSalaryValid: true,
      lastValidSalary: +salaryInput,
    }));
  };

  render() {
    const { salaryInput, isSalaryValid, lastValidSalary } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>勞保健保勞退</NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <EmployeeSalaryForm
                salary={salaryInput}
                valid={isSalaryValid}
                updateSalary={this.handleSalaryChange}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col md={{ size: 4 }}>
              <HealthInsuranceTable salary={lastValidSalary} />
            </Col>
            <Col md={{ size: 4 }}>
              <LaborInsuranceTable salary={lastValidSalary} />
            </Col>
            <Col md={{ size: 4 }}>
              <RetirePlanTable salary={lastValidSalary} />
            </Col>
          </Row>
          <Row>
            <Col className="text-center" md={{ size: 6, offset: 3 }}>
              <span>健保相關資料自 107年1月1日 開始適用</span>
              <br />
              健保資料來自
              <a href="https://www.nhi.gov.tw/Content_List.aspx?n=FFE36DCABA22D234&topn=3185A4DF68749BA9">
                衛福部健保署
              </a>
              <br />
              <span>勞保、勞退相關資料自 107年1月1日 開始適用</span>
              <br />
              勞保資料來自
              <a href="http://www.bli.gov.tw/sub.aspx?a=UA2ZR%2bHjzD4%3d">
                勞動部勞保局
              </a>
              <br />
              勞退資料來自
              <a href="http://www.bli.gov.tw/sub.aspx?a=uyDH38mCe%2fM%3d">
                勞動部勞保局
              </a>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
