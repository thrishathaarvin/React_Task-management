import React, { useState } from "react";
import { Layout, Card, Button, Popconfirm } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader.jsx";
import StatusTag from "../components/common/StatusTag.jsx";
import TaskFormModal from "../components/task/taskFormModal.jsx";
import { useTasks } from "../hooks/useTasks.jsx";

const { Content } = Layout;

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTask } = useTasks();

  const task = tasks.find(t => String(t.id) === id);

  const [editOpen, setEditOpen] = useState(false);

  if (!task) {
    return (
      <Layout>
        <PageHeader />
        <Content style={{ padding: "24px" }}>
          <h2>Task not found</h2>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader />

      <Content
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f0f2f5"
        }}
      >
        <Card style={{ width: "500px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{task.title}</h2>
            <StatusTag status={task.status} />
          </div>

          <p>{task.description}</p>
          <p><strong>Created:</strong> {new Date(task.createdAt).toLocaleString()}</p>

          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <Button type="primary" onClick={() => setEditOpen(true)}>
              Edit
            </Button>

            <Popconfirm
              title="Delete this task?"
              onConfirm={() => {
                deleteTask(task.id);
                navigate("/tasks");
              }}
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </div>
        </Card>

        <TaskFormModal
          visible={editOpen}
          mode="edit"
          initialData={task}
          onSubmit={(data) => {
            updateTask({ ...task, ...data });
            setEditOpen(false);
          }}
          onCancel={() => setEditOpen(false)}
        />
      </Content>
    </Layout>
  );
};

export default TaskDetails;
