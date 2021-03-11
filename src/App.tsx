import React, { useState } from 'react';
import { Typography } from 'antd';
import TermForm from './components/TermForm';
import TermTable from './components/TermTable';
import 'antd/dist/antd.css'

const { Title } = Typography;

const App: React.FC = () => {
  const [data, setData] = useState([]);

  const onSubmit = (values: any) => {
    setData(values.course_gpa);
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
