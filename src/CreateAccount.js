import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import "./all.css";

class Createaccount extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1> Create Account</h1>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="1">
              <AiOutlineGooglePlus />
            </Col>
            <Col md="auto">
              <FaFacebookF />
            </Col>
            <Col xs lg="2">
              <FaFacebookF />
            </Col>
          </Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Createaccount;
