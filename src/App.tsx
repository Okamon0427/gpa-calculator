import React, { useState } from 'react';
import { Typography } from 'antd';
import TermForm from './components/TermForm';
import TermTable from './components/TermTable';
import 'antd/dist/antd.css'

const { Title } = Typography;

const App: React.FC = () => {
  const [data, setData] = useState([]);

  const onSubmit = (values: any) => {
    const courses = values.course_gpa;
    const newCourses = courses.map((courseObj: any) => {
      let gradeNum = 0;
      switch(courseObj.grade) {
        case 'A':
          gradeNum = 4.0;
          break;
        case 'B+':
          gradeNum = 3.5;
          break;
        case 'B':
          gradeNum = 3.0;
          break;
        case 'C':
          gradeNum = 2.5;
          break;
        case 'D':
          gradeNum = 2.0;
          break;
      };
      const score = courseObj.credit * gradeNum;
      return { ...courseObj, score };
    });
    setData(newCourses);
  }

  return (
    <>
      <Title level={2}>
        GPA Calculator
      </Title>
      <TermForm onSubmit={onSubmit} />
      <TermTable data={data} />
    </>
  );
}

export default App;
