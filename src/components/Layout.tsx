import { Layout } from 'antd';

const { Content, Footer, Header } = Layout;

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{ position: 'fixed', zIndex: 1, width: '100%', color: 'white' }}
      >
        GPA Calculator
      </Header>
      <Content style={{ marginTop: '64px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        GPA Calculator
      </Footer>
    </Layout>
  );
}

export default LayoutComponent;