import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Col, Row, message } from 'antd';
import Layout from './components/Layout';
import GPAForm from './components/GPAForm';
import GPAPredictForm from './components/GPAPredictForm';
import GradeExample from './components/GradeExample';
import { addScore, calcGPA, calcAdditionalGPA } from './utils/functions';
import { INITIAL_GRADES, MESSAGE } from './utils/constants';
import 'antd/dist/antd.css'

const useStyles = createUseStyles({
  line1: {
    display: 'block'
  },
  '@media (min-width: 1200px)': {
    line1: {
      display: 'none' 
    }
  },
  line2: {
    display: 'block'
  },
  '@media (min-width: 768px)': {
    line2: {
      display: 'none' 
    }
  },
});

const App: React.FC = () => {
  const classes = useStyles();
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
      <Row gutter={32}>
        <Col xs={24} md={16} xl={20}>
          <Row gutter={32}>
            <Col xs={24} xl={12}>
              <GPAForm
                onSubmit={onSubmit1}
                credit={credit}
                GPA={GPA}
                grades={grades}
              />
            </Col>
            <Col xs={24} xl={12}>
              <hr className={classes.line1} />
              <GPAPredictForm
                onSubmit={onSubmit2}
                additionalGPA={additionalGPA}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={8} xl={4}>
          <hr className={classes.line2} />
          <GradeExample
            onSubmit={onSubmit3}
            grades={grades}
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
