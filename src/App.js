import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container className="fill">
      <Container className="text-center timer-box">
        <Row>Pomodoro Clock</Row>
        <Row className="timer">timer</Row>
        <Container>
          <Row>
            <Col>Break Time</Col>
            <Col>Focus Time</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="link"> - </Button>
              <span>05</span>
              <Button variant="link"> + </Button>
            </Col>
            <Col>
              <Button variant="link">-</Button>
              <span>25</span>
              <Button variant="link">+</Button>
            </Col>
          </Row>
          <Button variant="outline-danger">Start</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
