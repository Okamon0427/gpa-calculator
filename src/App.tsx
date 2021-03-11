import React, { useState } from 'react';
import { Typography } from 'antd';
import TermForm from './components/TermForm';
import TermTable from './components/TermTable';
import { addScore } from './utils/functions';
import 'antd/dist/antd.css'

const { Title } = Typography;

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const onSubmit = (values: any) => {
    const newCourses = addScore(values.course_gpa);
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
