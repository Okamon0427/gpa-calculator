import React, { useState } from 'react';
import { Col, Row, Typography } from 'antd';
import GPAForm from './components/GPAForm';
import GPAPredictForm from './components/GPAPredictForm';
import { addScore, calcGPA, calcAdditionalGPA } from './utils/functions';
import 'antd/dist/antd.css'

const { Title } = Typography;

const App: React.FC = () => {
  const [credit, setCredit] = useState<number>(0);
  const [GPA, setGPA] = useState<number>(0);
  const [additionalGPA, setAdditionalGPA] = useState<number>(0);

  const onSubmit1 = (values: any) => {
    // add score object in couurses arrays
    const newCourses = addScore(values.course_gpa);
    
    // calculate credit and GPA using score
    const { totalCredits, GPA } = calcGPA(newCourses);

    setCredit(totalCredits);
    setGPA(GPA);
  };

  const onSubmit2 = (values: any) => {
    // calculate additional GPA to get target GPA
    const additionalGPA = calcAdditionalGPA(values);

    setAdditionalGPA(additionalGPA);
  };

  return (
    <>
      <Row>
        {/* <Col xs={2} md={8} /> */}
        <Col span={24}>
          <Title style={{ textAlign: 'center' }} level={2}>
            GPA Calculator
          </Title>
        </Col>
        {/* <Col xs={2} md={8} /> */}
      </Row>
      <Row>
        <Col xs={0} lg={2} />
        <Col xs={24} md={16}>
          <GPAForm onSubmit={onSubmit1} credit={credit} GPA={GPA} />
          <GPAPredictForm onSubmit={onSubmit2} additionalGPA={additionalGPA} />
        </Col>
        <Col xs={0} md={6} lg={4}>
        </Col>
        <Col xs={0} lg={2} />
      </Row>
    </>
  );
}

export default App;
