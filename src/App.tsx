import React, { useState } from 'react';
import { Card, Typography } from 'antd';
import GPAForm from './components/GPAForm';
import GPAPredictForm from './components/GPAPredictForm';
import TermTable from './components/TermTable';
import { addScore, calcGPA, calcAdditionalGPA } from './utils/functions';
import 'antd/dist/antd.css'

const { Title, Text } = Typography;

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [credit, setCredit] = useState<number>(0);
  const [GPA, setGPA] = useState<number>(0);
  const [additionalGPA, setAdditionalGPA] = useState<number>(0);

  const onSubmit1 = (values: any) => {
    // add score object in couurses arrays
    const newCourses = addScore(values.course_gpa);
    
    setData(newCourses);

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
      <Title level={2}>
        GPA Calculator
      </Title>
      <GPAForm onSubmit={onSubmit1} />
      <TermTable data={data} />
      <Card style={{ width: 600 }}>
        <Text>Total Credits: {credit}</Text>
        <br />
        <Text>GPA: {GPA}</Text>
      </Card>
      <GPAPredictForm onSubmit={onSubmit2} />
      <Card style={{ width: 600 }}>
        <Text>You have to get: {additionalGPA}</Text>
      </Card>
    </>
  );
}

export default App;
