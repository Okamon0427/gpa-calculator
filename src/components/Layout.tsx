import { BackTop, Layout } from 'antd';
import { createUseStyles } from 'react-jss';

const { Content, Footer, Header } = Layout;

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    color: 'white',
    fontSize: '1.3rem'
  },
  content: {
    marginTop: '64px'
  },
  footer: {
    textAlign: 'center',
    padding: '12px 50px',
    backgroundColor: '#C0C0C0'
  },
  container: {
    width: '90vw',
    margin: '0 auto',
    padding: '16px 0'
  },
  '@media (min-width: 768px)': {
    container: {
      width: '90vw',
    }
  },
  '@media (min-width: 992px)': {
    container: {
      width: '80vw',
    }
  },
});

const LayoutComponent: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Header className={classes.header}>
        GPA Calculator
      </Header>
      <Content className={classes.content}>
        <div className={classes.container}>
          {children}
        </div>
      </Content>
      <Footer className={classes.footer}>
        GPA Calculator &#169; Created by Takuto Okamoto
      </Footer>
      <BackTop visibilityHeight={200} />
    </Layout>
  );
}

export default LayoutComponent;