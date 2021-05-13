import { Button, Col, Form, InputNumber, Row, Typography } from 'antd';

const { Title } = Typography;

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
    <>
      <Title level={4}>Estimate upcoming GPA</Title>
      <Form
        {...layout}
        layout="horizontal"
        name="basic"
        onFinish={onSubmit}
      >
        <Row>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Current GPA"
              name="currentGPA"
              rules={[{ required: true, message: 'Required' }]}
            >
              <InputNumber placeholder="0" min={0} max={10} step={0.01} />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Target GPA"
              name="targetGPA"
              rules={[{ required: true, message: 'Required' }]}
            >
              <InputNumber placeholder="0" min={0} max={10} step={0.01} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Current Credits"
              name="currentCredits"
              rules={[{ required: true, message: 'Required' }]}
            >
              <InputNumber placeholder="0" step={0.5} />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Additional Credits"
              name="additionalCredits"
              rules={[{ required: true, message: 'Required' }]}
            >
              <InputNumber placeholder="0" step={0.5} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {additionalGPA > 0 ? (
        <Title level={4}>You have to get a GPA of {additionalGPA.toFixed(2)} or higher</Title>
      ) : null}
    </>
  );
};

export default GPAPredictForm;