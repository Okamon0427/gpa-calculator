import { Card, Form, InputNumber, Button } from 'antd';

interface Props {
  onSubmit: (values: any) => void;
}

const GPAPredictForm: React.FC<Props> = ({ onSubmit }: Props) => {  
  return (
    <Card style={{ width: 600 }}>
      <Form
        name="basic"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Current GPA"
          name="currentGPA"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber placeholder="0" step={0.01} />
        </Form.Item>
        <Form.Item
          label="Target GPA"
          name="targetGPA"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber placeholder="0" step={0.01} />
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
    </Card>
  );
};

export default GPAPredictForm;