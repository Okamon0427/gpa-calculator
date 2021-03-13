import { Button, Card, Form, InputNumber, Typography } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface Props {
  onSubmit: (values: any) => void;
}

const GradeExample: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <Card>
      <Title level={4}>Grade Setting</Title>
      <Form
        {...layout}
        name="basic"
        onFinish={onSubmit}
      >
        <Form.Item
          label="A"
          name="A"
          initialValue={4.0}
        >
          <InputNumber placeholder="4.0" step={0.1} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default GradeExample;