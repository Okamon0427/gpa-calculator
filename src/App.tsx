import React, { useState } from 'react';
import { Card, Typography } from 'antd';
import TermForm from './components/TermForm';
import TermTable from './components/TermTable';
import { addScore, calcGPA } from './utils/functions';
import 'antd/dist/antd.css'

const { Title, Text } = Typography;

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [credit, setCredit] = useState<number>(0);
  const [GPA, setGPA] = useState<number>(0);

  const onSubmit = (values: any) => {
    // add score object in couurses arrays
    const newCourses = addScore(values.course_gpa);
    
    setData(newCourses);

    // calculate credit and GPA using score
    const { totalCredits, GPA } = calcGPA(newCourses);
    setCredit(totalCredits);
    setGPA(GPA);
  }

  return (
    <>
      <Title level={2}>
        GPA Calculator
      </Title>
      <TermForm onSubmit={onSubmit} />
      <TermTable data={data} />
      <Card style={{ width: 600 }}>
        <Text>Total Credits: {credit}</Text>
        <br />
        <Text>GPA: {GPA}</Text>
      </Card>
    </>
  );
}

export default App;
