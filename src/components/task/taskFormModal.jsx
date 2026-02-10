import { Modal, Form, Input } from "antd";
import { useEffect } from "react";

const TaskFormModal = ({ visible, mode, onSubmit, onCancel, initialData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (mode === "edit" && initialData) {
      form.setFieldsValue(initialData);
    } else {
      form.resetFields();
    }
  }, [mode, initialData, form]);

  return (
    <Modal
      title={mode === "edit" ? "Edit Task" : "New Task"}
      open={visible}
      okText={mode === "edit" ? "Update" : "Create"}
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then(values => {
          onSubmit(values);
        });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskFormModal;
