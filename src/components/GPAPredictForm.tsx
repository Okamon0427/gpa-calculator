import { Button, Card, Form, InputNumber, Typography } from 'antd';

const { Text, Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface Props {
  onSubmit: (values: any) => void;
  additionalGPA: number;
}

const GPAPredictForm: React.FC<Props> = ({ onSubmit, additionalGPA }: Props) => { 
  return (
    <Card>
      <Title level={4}>Estimate upcoming GPA</Title>
      <Form
        {...layout}
        layout="horizontal"
        name="basic"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Current GPA"
          name="currentGPA"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber placeholder="0" min={0} max={10} step={0.01} />
        </Form.Item>
        <Form.Item
          label="Target GPA"
          name="targetGPA"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber placeholder="0" min={0} max={10} step={0.01} />
        </Form.Item>
        <Form.Item
          label="Current Credits"
          name="currentCredits"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber placeholder="0" step={0.5} />
        </Form.Item>
        <Form.Item
          label="Additional Credits"
          name="additionalCredits"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber placeholder="0" step={0.5} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {additionalGPA > 0 ? (
        <Text>You have to get: {additionalGPA.toFixed(2)}</Text>
      ) : null}
    </Card>
  );
};

export default GPAPredictForm;