import { Modal, Form, Input } from "antd";

const TaskFormModal = ({ visible, onCreate, onCancel, initialData }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Edit Task"
      open={visible}
      okText="Edit"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then(values => {
          onCreate(values);
          form.resetFields();
        });
      }}
    >
      <Form form={form} layout="vertical" initialValues={initialData}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskFormModal;
