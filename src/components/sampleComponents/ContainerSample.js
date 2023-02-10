import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContainerSample(props) {
  return (
    <Container
      id={props.id}
      fluid
      onDoubleClick={() => props.handleDoubleClick(props.id)}
    >
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default ContainerSample;
