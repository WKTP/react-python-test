import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addPerson } from '../features/personSlice';
import { v4 as uuidv4 } from 'uuid';

const PersonForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: { name: string; age: number }) => {
    dispatch(addPerson({ ...values, id: uuidv4() }));
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Person
      </Button>
    </Form>
  );
};

export default PersonForm;
