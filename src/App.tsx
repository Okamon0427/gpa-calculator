import React, { useState } from 'react';
import { Col, Row, message, Typography } from 'antd';
import Layout from './components/Layout';
import GPAForm from './components/GPAForm';
import GPAPredictForm from './components/GPAPredictForm';
import GradeExample from './components/GradeExample';
import { addScore, calcGPA, calcAdditionalGPA } from './utils/functions';
import { INITIAL_GRADES, MESSAGE } from './utils/constants';
import 'antd/dist/antd.css'

const App: React.FC = () => {
  const [credit, setCredit] = useState<number>(0);
  const [GPA, setGPA] = useState<number>(0);
  const [additionalGPA, setAdditionalGPA] = useState<number>(0);
  const [grades, setGrades] = useState(INITIAL_GRADES);

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

    message.success(MESSAGE.SUCCESS_GRADE_SETTING);
  }

  return (
    <Layout>
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
          <GradeExample
            onSubmit={onSubmit3}
            grades={grades}
          />
        </Col>
        <Col xs={0} md={1} lg={2} />
      </Row>
    </Layout>
  );
}

export default App;
