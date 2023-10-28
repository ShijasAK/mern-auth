import { Container, Col, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <Container>
      
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}></Col>
      </Row>
       
       <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Login />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}></Col>
      </Row>

      
    </Container>
  );
}

export default App;

