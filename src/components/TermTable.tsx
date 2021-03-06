import { Form, Input, InputNumber, Button, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const TermTable: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="course_gpa">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space
                key={field.key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  name={[field.name, 'course']}
                  fieldKey={[field.fieldKey, 'course']}
                >
                  <Input placeholder="Course" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'credit']}
                  fieldKey={[field.fieldKey, 'credit']}
                  rules={[{ required: true, message: 'Required' }]}
                >
                  <InputNumber placeholder="0" step={0.5} />
                </Form.Item>
                <Form.Item
                  name={[field.name, 'grade']}
                  fieldKey={[field.fieldKey, 'grade']}
                  rules={[{ required: true, message: 'Required' }]}
                >
                  <Select
                    placeholder="Select a option"
                    allowClear
                  >
                    <Option value="A">A</Option>
                    <Option value="B+">B+</Option>
                    <Option value="B">B</Option>
                    <Option value="C">C</Option>
                    <Option value="D">D</Option>
                  </Select>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TermTable;