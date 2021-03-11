import { Card, Table, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Data {
  key: string,
  name: string,
  age: number,
  address: string,
}

const data: Data[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const TermTable: React.FC = () => {
  const columns: ColumnsType<Data> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  return (
    <Card style={{ width: 600 }}>
      <Table<Data> columns={columns} dataSource={data} />
    </Card>
  );
};

export default TermTable;