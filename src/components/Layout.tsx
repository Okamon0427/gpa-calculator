import { BackTop, Layout } from 'antd';
import { createUseStyles } from 'react-jss';

const { Content, Footer, Header } = Layout;

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    color: 'white'
  },
  content: {
    marginTop: '64px'
  },
  footer: {
    textAlign: 'center',
    padding: '12px 50px',
    backgroundColor: '#C0C0C0'
  }
});

const LayoutComponent: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Header className={classes.header}>
        GPA Calculator
      </Header>
      <Content className={classes.content}>
        {children}
      </Content>
      <Footer className={classes.footer}>
        GPA Calculator &#169; Created by Takuto Okamoto
      </Footer>
      <BackTop visibilityHeight={200} />
    </Layout>
  );
}

export default LayoutComponent;