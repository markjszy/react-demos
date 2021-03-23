import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>App Demo</h1>
        </Col>
        <Col>
          <Button variant="primary" size="lg">This is a React Bootstrap button!</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
