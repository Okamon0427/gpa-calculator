import { Button, Col, FormGroup, Input, Row } from 'reactstrap';

interface Props {
  removeRow: (key: number) => void;
  index: number;
}

const TermTable: React.FC<Props> = ({ removeRow, index }) => {
  return (
    <Row form>
      <Col md={1}>
        <Button onClick={() => removeRow(index)}>Remove</Button>
      </Col>
      <Col md={7}>
        <FormGroup>
          <Input type="text" name="course" id="course" placeholder="placeholder" />
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Input type="number" name="credit" id="credit" placeholder="placeholder" />
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Input type="select" name="grade" id="grade">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default TermTable;