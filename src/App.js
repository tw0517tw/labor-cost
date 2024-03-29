import React, { useState } from 'react';
import { Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap';

import EmployeeSalaryForm from './components/EmployeeSalaryForm';
import HealthInsuranceTable from './components/HealthInsuranceTable';
import LaborInsuranceTable from './components/LaborInsuranceTable';
import RetirePlanTable from './components/RetirePlanTable';

const App = () => {
  const [salaryInput, setSalaryInput] = useState('');
  const [isSalaryValid, setIsSalaryValid] = useState(true);
  const [lastValidSalary, setLastValidSalary] = useState(0);

  const handleSalaryChange = (event) => {
    const eventValue = event.target.value;
    const salaryNumber = +eventValue;

    setSalaryInput(eventValue);

    if (Number.isNaN(salaryNumber) || !Number.isFinite(salaryNumber)) {
      setIsSalaryValid(false);
      return;
    }

    setIsSalaryValid(true);
    setLastValidSalary(salaryNumber);
  };

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
              updateSalary={handleSalaryChange}
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
            <span>健保相關資料自 110年1月1日 開始適用</span>
            <br />
            健保資料來自
            <a href="https://www.nhi.gov.tw/Content_List.aspx?n=23E61FA6B5799914&topn=5FE8C9FEAE863B46">
              衛福部健保署
            </a>
            <br />
            <span>勞保、勞退相關資料自 110年1月1日 開始適用</span>
            <br />
            勞保資料來自
            <a href="https://www.bli.gov.tw/0011588.html">勞動部勞保局</a>
            <br />
            勞退資料來自
            <a href="https://www.bli.gov.tw/0013083.html">勞動部勞保局</a>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
