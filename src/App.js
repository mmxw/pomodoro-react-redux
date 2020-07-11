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
        <Container className="timer timer-box">
          <Row id='timer-label'>timer</Row>
          <Row id='time-left'>time-left</Row>
        </Container>
        <Container>
          <Row>
            <Col id='break-label'>Break Time</Col>
            <Col id='session-label'>Focus Time</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="link" id='break-decrement'> - </Button>
              <span id='break-length'>05</span>
              <Button variant="link" id='break-increment'> + </Button>
            </Col>
            <Col>
              <Button variant="link" id='session-decrement'>-</Button>
              <span id='session-length'>25</span>
              <Button variant="link" id='session-increment'>+</Button>
            </Col>
          </Row>
          <Button variant="outline-danger" id='start_stop'>Start</Button>
          <Button variant="outline-danger" id='reset'>Reset</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
