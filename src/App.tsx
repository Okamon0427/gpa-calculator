import React, { useState } from 'react';
import { Col, Row, Typography } from 'antd';
import GPAForm from './components/GPAForm';
import GPAPredictForm from './components/GPAPredictForm';
import GradeExample from './components/GradeExample';
import { addScore, calcGPA, calcAdditionalGPA } from './utils/functions';
import 'antd/dist/antd.css'

const { Title } = Typography;

const initialGrades = [
  { letter: 'A', score: 4.0 },
  { letter: 'B+', score: 3.5 },
  { letter: 'B', score: 3.0 },
  { letter: 'C', score: 2.5 },
  { letter: 'D', score: 2.0 },
];

const App: React.FC = () => {
  const [credit, setCredit] = useState<number>(0);
  const [GPA, setGPA] = useState<number>(0);
  const [additionalGPA, setAdditionalGPA] = useState<number>(0);
  const [grades, setGrades] = useState(initialGrades);

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

  const onSubmit3 = (values: any) => {
    const newGrades = grades.map((grade: any) => {
      grade.score = values[grade.letter];
      return grade;
    });
    setGrades(newGrades);
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <Title style={{ textAlign: 'center' }} level={2}>
            GPA Calculator
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={0} md={1} lg={2} />
        <Col xs={24} md={16} lg={14}>
          <GPAForm
            onSubmit={onSubmit1}
            credit={credit}
            GPA={GPA}
            grades={grades}
          />
          <GPAPredictForm
            onSubmit={onSubmit2}
            additionalGPA={additionalGPA}
          />
        </Col>
        <Col xs={0} md={6}>
          <GradeExample onSubmit={onSubmit3} grades={grades} />
        </Col>
        <Col xs={0} md={1} lg={2} />
      </Row>
    </>
  );
}

export default App;
