import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
  Row,
  Col,
  Label,
  Input,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>勞保健保勞退</NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Label htmlFor="投保薪資">投保薪資</Label>
              <Input id="投保薪資" />
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 4 }}>
              <Label for="健保">健保</Label>
              <Input id="健保" />
            </Col>
            <Col md={{ size: 4 }}>
              <Label for="勞保">勞保</Label>
              <Input id="勞保" />
            </Col>
            <Col md={{ size: 4 }}>
              <Label for="勞退">勞退</Label>
              <Input id="勞退" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
