import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'reactstrap';
import TermTable from './components/TermTable';

const App: React.FC = () => {
  const [array, setArray] = useState<any[]>([...Array(3)]);

  const onSubmit = (e: any): void => {
    e.preventDefault();
    console.log('course[0]: ' + e.target.course[0].value);
    console.log('course[1]: ' + e.target.course[1].value);
    console.log('course[2]: ' + e.target.course[2].value);
  };

  const addRow = (): void => {
    setArray([...array, ...Array(1)]);
  };

  const removeRow = (index: number): void => {
    const filteredArray = array.filter((el, i) => {
      return i !== index;
    });
    console.log(filteredArray)
    setArray([...filteredArray])
  }

  return (
    <div>
      Hello
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md={1}></Col>
          <Col md={7}>Course Name</Col>
          <Col md={2}>Credit</Col>
          <Col md={2}>Grade</Col>
        </Row>
        {array.map((el: any, i: number) => (
          <TermTable key={i} index={i} removeRow={removeRow} />
        ))}
        <Button type="button" onClick={addRow}>Add Row</Button>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
