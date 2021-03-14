import { Card, Form, Input, InputNumber, Button, Select, Space, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';  

const { Option } = Select;
const { Text, Title } = Typography;

interface Props {
  onSubmit: (values: any) => void;
  credit: number,
  GPA: number,
  grades: any
}

const GPAForm: React.FC<Props> = ({ onSubmit, credit, GPA, grades }: Props) => {
  return (
    <Card>
      <Title level={4}>Calculate GPA</Title>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.List name="course_gpa" initialValue={["", "", ""]}>
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
                    <InputNumber placeholder="0.0" min={0} max={10} step={0.5} />
                  </Form.Item>
                  <Form.Item
                    name={[field.name, 'grade']}
                    fieldKey={[field.fieldKey, 'grade']}
                    rules={[{ required: true, message: 'Required' }]}
                  >
                    <Select
                      placeholder="Grade"
                      allowClear
                    >
                      {grades.map((grade: any, index: number) => (
                        <Option
                          key={index}
                          value={grade?.score}
                        >
                          {grade?.letter} ({grade?.score.toFixed(1)})
                        </Option>
                      ))}
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
      {credit > 0 && GPA > 0 ? (
        <>
          <Text>Total Credits: {credit.toFixed(1)}</Text>
          <br />
          <Text>GPA: {GPA.toFixed(2)}</Text>
        </>
      ) : null}
    </Card>
  );
};

export default GPAForm;