import { Card, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Props {
  data: any[]
}

interface Data {
  key: string,
  course: string,
  credit: number,
  grade: string,
}

const columns: ColumnsType<Data> = [
  {
    title: 'Course',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Credit',
    dataIndex: 'credit',
    key: 'credit',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
  },
];

const TermTable: React.FC<Props> = ({ data }: Props) => {  
  return (
    <Card style={{ width: 600 }}>
      <Table<Data> columns={columns} dataSource={data} />
    </Card>
  );
};

export default TermTable;