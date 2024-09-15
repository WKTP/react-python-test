import { Table, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deletePerson } from '../features/personSlice';
import { RootState } from '../store';

const PersonTable: React.FC = () => {
  const persons = useSelector((state: RootState) => state.person.persons);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => (
        <Button onClick={() => dispatch(deletePerson(record.id))}>Delete</Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={persons}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
};

export default PersonTable;
