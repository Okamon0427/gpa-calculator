import { Button, Form, InputNumber, Typography } from 'antd';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface Props {
  onSubmit: (values: any) => void;
  grades: any;
}

const GradeExample: React.FC<Props> = ({ onSubmit, grades }: Props) => {
  return (
    <>
      <Title level={4}>Grade Setting</Title>
      <Form
        {...layout}
        name="grades"
        onFinish={onSubmit}
      >
        {grades.map((grade: any, index: number) => (
          <Form.Item
            key={index}
            label={grade?.letter}
            name={grade?.letter}
            initialValue={grade?.score}
            rules={[{ required: true, message: 'Required' }]}
          >
            <InputNumber min={0} max={10} step={0.1} />
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Apply
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default GradeExample;