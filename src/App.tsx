import React from 'react';
import { Typography } from 'antd';
import TermForm from './components/TermForm';
import TermTable from './components/TermTable';
import 'antd/dist/antd.css'

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Title level={2}>
        GPA Calculator
      </Title>
      <TermForm />
      <TermTable />
    </>
  );
}

export default App;
