import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateAccount from "./CreateAccount";
import Welcome from "./Welcome";
class Form extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row className=" parent">
            <Col className="leftSide">
              <Welcome />
            </Col>
            <Col>
              <CreateAccount />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Form;
