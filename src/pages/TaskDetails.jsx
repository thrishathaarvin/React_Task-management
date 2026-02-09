
import React, { useState } from "react";
import { Layout, Card, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader.jsx";
import { useTasks } from "../hooks/useTasks.jsx";
import TaskFormModal from "../components/task/taskFormModal.jsx";

const { Content } = Layout;

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTask } = useTasks();

  const task = tasks.find(t => t.id == id);
  const [editOpen, setEditOpen] = useState(false);

  if (!task) {
    return (
      <Layout>
        <PageHeader />
        <Content style={{ textAlign: "center", marginTop: "100px" }}>
          <h2>Task not found</h2>
          <Button onClick={() => navigate("/tasks")}>Go back</Button>
        </Content>
      </Layout>
    );
  }

  const handleEdit = (values) => {
    updateTask({ ...task, ...values });
    setEditOpen(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/tasks");
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <PageHeader />

      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
        }}
      >
        <Card style={{ width: "500px" }}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <Button type="primary" onClick={() => setEditOpen(true)}>
              Edit
            </Button>
            <Button danger onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card>

        <TaskFormModal
          visible={editOpen}
          initialData={task}
          onCreate={handleEdit}
          onCancel={() => setEditOpen(false)}
        />
      </Content>
    </Layout>
  );
};

export default TaskDetails;
