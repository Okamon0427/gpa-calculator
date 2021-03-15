import { Col, Layout, Row, message, Typography } from 'antd';

const { Content, Footer, Header } = Layout;

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header>GPA Calculator</Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>GPA Calculator</Footer>
    </Layout>
  );
}


export default LayoutComponent;